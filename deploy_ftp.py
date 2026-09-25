import os
import sys
import time
import ftplib
import getpass

FTP_HOST = "ftp.ustaad.ae"
FTP_PORT = 21
FTP_USER = "devsynx@ustaad.ae"
LOCAL_DIR = os.path.abspath("dist/client")

class FTPUploader:
    def __init__(self, host, port, user, password):
        self.host = host
        self.port = port
        self.user = user
        self.password = password
        self.ftp = None
        self.connect()

    def connect(self):
        if self.ftp:
            try:
                self.ftp.close()
            except Exception:
                pass
        print(f"\nConnecting to {self.host}:{self.port} as {self.user}...")
        try:
            self.ftp = ftplib.FTP_TLS()
            self.ftp.connect(self.host, self.port, timeout=30)
            self.ftp.login(self.user, self.password)
            self.ftp.prot_p()
            print("✓ Connected securely using FTPS (Explicit TLS).")
        except Exception as e:
            print(f"Notice: FTPS connection error ({e}), trying standard FTP...")
            try:
                self.ftp = ftplib.FTP()
                self.ftp.connect(self.host, self.port, timeout=30)
                self.ftp.login(self.user, self.password)
                print("✓ Connected using standard FTP.")
            except Exception as err:
                print(f"❌ Connection failed: {err}")
                sys.exit(1)
        
        try:
            self.ftp.cwd("public_html")
        except Exception:
            pass

    def ensure_connected(self):
        try:
            self.ftp.voidcmd("NOOP")
        except Exception:
            print("\n[Reconnecting FTP session...]")
            time.sleep(1)
            self.connect()

    def create_dir_if_needed(self, remote_dir):
        if not remote_dir:
            return
        parts = remote_dir.strip("/").split("/")
        curr = ""
        for part in parts:
            curr = f"{curr}/{part}".strip("/")
            try:
                self.ftp.mkd(curr)
            except Exception:
                pass

    def upload_file(self, local_path, remote_path, retries=5):
        local_size = os.path.getsize(local_path)
        
        # Check size to skip already uploaded files
        try:
            remote_size = self.ftp.size(remote_path)
            if remote_size == local_size:
                return "skipped"
        except Exception:
            pass

        for attempt in range(1, retries + 1):
            try:
                self.ensure_connected()
                with open(local_path, "rb") as f:
                    self.ftp.storbinary(f"STOR {remote_path}", f)
                time.sleep(0.02)  # Tiny pause to avoid socket exhaustion
                return "uploaded"
            except Exception as e:
                print(f"\n[Warning] Attempt {attempt}/{retries} failed for {remote_path}: {e}")
                time.sleep(attempt * 1.5)
                self.connect()
        
        raise RuntimeError(f"Failed to upload {remote_path} after {retries} attempts.")

def collect_all_files(local_dir):
    file_list = []
    for root, dirs, files in os.walk(local_dir):
        rel_dir = os.path.relpath(root, local_dir)
        if rel_dir == ".":
            rel_dir = ""
        for file in files:
            if file in [".DS_Store", ".vite"]:
                continue
            local_path = os.path.join(root, file)
            remote_path = f"{rel_dir}/{file}".strip("/") if rel_dir else file
            file_list.append((local_path, remote_path))

    # Priority sort: assets & non-html first, html last
    def priority_sort(item):
        _, remote_path = item
        if remote_path.startswith("assets/"):
            return (0, remote_path)
        if not remote_path.endswith(".html"):
            return (1, remote_path)
        return (2, remote_path)

    return sorted(file_list, key=priority_sort)

def main():
    if not os.path.exists(LOCAL_DIR):
        print(f"Error: Build output directory '{LOCAL_DIR}' does not exist.")
        print("Please run 'npm run build' first.")
        sys.exit(1)

    password = sys.argv[1] if len(sys.argv) > 1 else getpass.getpass(f"Enter FTP Password for {FTP_USER}: ")

    all_files = collect_all_files(LOCAL_DIR)
    total_count = len(all_files)
    print(f"Found {total_count} files to synchronize from {LOCAL_DIR}.\n")

    uploader = FTPUploader(FTP_HOST, FTP_PORT, FTP_USER, password)
    
    # Pre-create all needed remote directories
    created_dirs = set()
    for _, remote_path in all_files:
        dir_name = os.path.dirname(remote_path)
        if dir_name and dir_name not in created_dirs:
            uploader.create_dir_if_needed(dir_name)
            created_dirs.add(dir_name)

    print(f"\nStarting deployment...\n" + "=" * 60)
    
    uploaded_count = 0
    skipped_count = 0

    for idx, (local_path, remote_path) in enumerate(all_files, 1):
        status = uploader.upload_file(local_path, remote_path)
        pct = (idx / total_count) * 100
        if status == "uploaded":
            uploaded_count += 1
            print(f"[{idx}/{total_count} - {pct:.1f}%] [UPLOADED] {remote_path}")
        else:
            skipped_count += 1
            print(f"[{idx}/{total_count} - {pct:.1f}%] [EXISTS]   {remote_path}")

    print("=" * 60)
    print(f"🎉 Deployment Complete!")
    print(f"Total Files: {total_count} | Uploaded: {uploaded_count} | Unchanged: {skipped_count}")

    try:
        uploader.ftp.quit()
    except Exception:
        pass

if __name__ == "__main__":
    main()
