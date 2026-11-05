import os
import sys
import time
import ftplib
import getpass
import hashlib
import json

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

FTP_HOST = "ftp.ustaad.ae"
FTP_PORT = 21
FTP_USER = "devsynx@ustaad.ae"
LOCAL_DIR = os.path.abspath("dist/client")
MANIFEST_FILE = os.path.abspath(".ftp_deploy_manifest.json")

def calculate_md5(file_path):
    hash_md5 = hashlib.md5()
    with open(file_path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

def load_manifest():
    if os.path.exists(MANIFEST_FILE):
        try:
            with open(MANIFEST_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return None

def save_manifest(manifest):
    try:
        with open(MANIFEST_FILE, "w", encoding="utf-8") as f:
            json.dump(manifest, f, indent=2)
    except Exception as e:
        print(f"[Warning] Failed to save manifest: {e}")

class FastFTPUploader:
    def __init__(self, host, port, user, password):
        self.host = host
        self.port = port
        self.user = user
        self.password = password
        self.ftp = None
        self.known_remote_dirs = set()
        self.connect()

    def connect(self, max_retries=5):
        if self.ftp:
            try:
                self.ftp.close()
            except Exception:
                pass
        
        for attempt in range(1, max_retries + 1):
            print(f"\nConnecting to {self.host}:{self.port} as {self.user} (attempt {attempt}/{max_retries})...")
            try:
                self.ftp = ftplib.FTP_TLS()
                self.ftp.connect(self.host, self.port, timeout=30)
                self.ftp.login(self.user, self.password)
                self.ftp.prot_p()
                print("[OK] Connected securely using FTPS (Explicit TLS).")
                break
            except Exception as e:
                print(f"Notice: FTPS connection error ({e}), trying standard FTP...")
                try:
                    self.ftp = ftplib.FTP()
                    self.ftp.connect(self.host, self.port, timeout=30)
                    self.ftp.login(self.user, self.password)
                    print("[OK] Connected using standard FTP.")
                    break
                except Exception as err:
                    print(f"Connection attempt {attempt} failed: {err}")
                    if attempt < max_retries:
                        time.sleep(min(10, 2 * attempt))
                    else:
                        print(f"[ERROR] All connection attempts failed: {err}")
                        sys.exit(1)
        
        # Account root is already the website root directory
        pass

    def ensure_connected(self):
        try:
            self.ftp.voidcmd("NOOP")
        except Exception:
            print("\n[Reconnecting FTP session...]")
            time.sleep(1)
            self.connect()

    def create_dir_if_needed(self, remote_dir):
        if not remote_dir or remote_dir in self.known_remote_dirs:
            return
        parts = remote_dir.replace("\\", "/").strip("/").split("/")
        curr = ""
        for part in parts:
            if not part:
                continue
            curr = f"{curr}/{part}".strip("/")
            if curr not in self.known_remote_dirs:
                try:
                    self.ftp.mkd(curr)
                except Exception:
                    pass
                self.known_remote_dirs.add(curr)

    def upload_file(self, local_path, remote_path, retries=3):
        dir_name = os.path.dirname(remote_path).replace("\\", "/")
        if dir_name:
            self.create_dir_if_needed(dir_name)

        for attempt in range(1, retries + 1):
            try:
                self.ensure_connected()
                with open(local_path, "rb") as f:
                    self.ftp.storbinary(f"STOR {remote_path}", f)
                return True
            except Exception as e:
                print(f"\n[Warning] Attempt {attempt}/{retries} failed for {remote_path}: {e}")
                time.sleep(attempt * 1.5)
                self.connect()
        
        raise RuntimeError(f"Failed to upload {remote_path} after {retries} attempts.")

def main():
    if not os.path.exists(LOCAL_DIR):
        print(f"Error: Build output directory '{LOCAL_DIR}' does not exist.")
        print("Please run 'npm run build' first.")
        sys.exit(1)

    password = (
        (sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else None) or
        os.environ.get("FTP_PASSWORD") or
        "Allah512!!"
    )

    force_all = "--all" in sys.argv or "--force" in sys.argv
    existing_manifest = load_manifest()
    is_first_manifest = existing_manifest is None

    manifest = existing_manifest if existing_manifest is not None else {}

    # Collect all local files
    all_local_files = []
    for root, dirs, files in os.walk(LOCAL_DIR):
        rel_dir = os.path.relpath(root, LOCAL_DIR).replace("\\", "/")
        if rel_dir == ".":
            rel_dir = ""
        for file in files:
            if file in [".DS_Store", ".vite"]:
                continue
            local_path = os.path.join(root, file)
            remote_path = f"{rel_dir}/{file}".strip("/") if rel_dir else file
            remote_path = remote_path.replace("\\", "/")
            all_local_files.append((local_path, remote_path))

    # Newly modified files in public to ensure they get uploaded
    new_public_names = {
        "f5c6d7cd01004daf8bfeaddec908cf92.txt",
        "images/biology/bio_card3_crisp.png",
        "images/biology/bio_card3_clean.png",
        "images/blogs/igcse-maths-exam-pressure-points-uae.webp",
        "images/blogs/maths-anxiety-teenager-uae.webp",
        "images/blogs/parent-teen-calm-conversation-about-maths.webp",
        "images/blogs/student-writing-worries-before-maths-test.webp",
        "images/blogs/teenager-explaining-maths-step-aloud.webp",
        "images/blogs/why-students-freeze-exam-questions-scaffolding-trap.jpg",
        "images/blogs/why-students-freeze-exam-questions-scaffolding-trap.webp",
        "images/blogs/retrieval-practice-4-step-protocol.webp",
        "images/ustaad-online-orientation-session.jpg",
    }

    files_to_upload = []
    already_synced_count = 0

    print("Analyzing local files against deployment manifest...")
    for local_path, remote_path in all_local_files:
        current_md5 = calculate_md5(local_path)

        # First run seed: if manifest didn't exist, we know untouched public static images are already on the server
        if is_first_manifest and not force_all:
            is_html = remote_path.endswith(".html")
            is_asset = remote_path.startswith("assets/")
            is_seo = remote_path in ["sitemap.xml", "robots.txt", "f5c6d7cd01004daf8bfeaddec908cf92.txt"]
            is_new_public = any(remote_path.endswith(np) for np in new_public_names)

            if not (is_html or is_asset or is_seo or is_new_public):
                manifest[remote_path] = current_md5
                already_synced_count += 1
                continue

        if not force_all and manifest.get(remote_path) == current_md5:
            already_synced_count += 1
        else:
            files_to_upload.append((local_path, remote_path, current_md5))

    # Priority sort: assets & non-html first, html last
    def priority_sort(item):
        _, remote_path, _ = item
        if remote_path.startswith("assets/"):
            return (0, remote_path)
        if not remote_path.endswith(".html"):
            return (1, remote_path)
        return (2, remote_path)

    files_to_upload.sort(key=priority_sort)
    to_upload_count = len(files_to_upload)

    print(f"\n============================================================")
    print(f"Total Local Files : {len(all_local_files)}")
    print(f"Already Synced    : {already_synced_count} (skipped instantly)")
    print(f"Pending Upload    : {to_upload_count} (only new/modified)")
    print(f"============================================================\n")

    if to_upload_count == 0:
        print("[SUCCESS] All files are already up-to-date on the server!")
        save_manifest(manifest)
        return

    uploader = FastFTPUploader(FTP_HOST, FTP_PORT, FTP_USER, password)

    uploaded_count = 0
    start_time = time.time()

    for idx, (local_path, remote_path, file_md5) in enumerate(files_to_upload, 1):
        pct = (idx / to_upload_count) * 100
        uploader.upload_file(local_path, remote_path)
        manifest[remote_path] = file_md5
        uploaded_count += 1
        print(f"[{idx}/{to_upload_count} - {pct:.1f}%] [UPLOADED] {remote_path}")

        # Save manifest progress every 15 files
        if idx % 15 == 0:
            save_manifest(manifest)

    save_manifest(manifest)
    elapsed = time.time() - start_time

    print(f"\n" + "=" * 60)
    print(f"[SUCCESS] Fast Deployment Complete in {elapsed:.1f}s!")
    print(f"Uploaded: {uploaded_count} files | Skipped Unchanged: {already_synced_count} files")
    print("=" * 60)

    try:
        uploader.ftp.quit()
    except Exception:
        pass

if __name__ == "__main__":
    main()
