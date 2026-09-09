import os
import sys
import ftplib
import getpass

FTP_HOST = "ftp.ustaad.ae"
FTP_PORT = 21
FTP_USER = "devsynx@ustaad.ae"
LOCAL_DIR = os.path.abspath("dist/client")

def upload_dir(ftp, local_dir, remote_dir):
    for item in os.listdir(local_dir):
        if item == ".DS_Store" or item == ".vite":
            continue
        local_path = os.path.join(local_dir, item)
        remote_path = f"{remote_dir}/{item}".strip("/") if remote_dir else item
        
        if os.path.isfile(local_path):
            print(f"Uploading: {remote_path}")
            with open(local_path, "rb") as f:
                ftp.storbinary(f"STOR {remote_path}", f)
        elif os.path.isdir(local_path):
            try:
                ftp.mkd(remote_path)
            except Exception:
                pass  # Directory already exists
            upload_dir(ftp, local_path, remote_path)

def main():
    if not os.path.exists(LOCAL_DIR):
        print(f"Error: Build output directory '{LOCAL_DIR}' does not exist.")
        print("Please run 'npm run build' first.")
        sys.exit(1)

    password = sys.argv[1] if len(sys.argv) > 1 else getpass.getpass(f"Enter FTP Password for {FTP_USER}: ")

    print(f"\nConnecting to {FTP_HOST}:{FTP_PORT} as {FTP_USER}...")
    
    ftp = None
    try:
        ftp = ftplib.FTP_TLS()
        ftp.connect(FTP_HOST, FTP_PORT)
        ftp.login(FTP_USER, password)
        ftp.prot_p()
        print("✓ Connected securely using FTPS (Explicit TLS).")
    except Exception as e:
        print(f"Notice: FTPS connection error ({e}), falling back to standard FTP...")
        try:
            ftp = ftplib.FTP()
            ftp.connect(FTP_HOST, FTP_PORT)
            ftp.login(FTP_USER, password)
            print("✓ Connected using standard FTP.")
        except Exception as err:
            print(f"❌ Connection failed: {err}")
            sys.exit(1)

    print("Current remote working directory:", ftp.pwd())

    # Attempt to navigate to public_html if accessible
    try:
        ftp.cwd("public_html")
        print("✓ Switched remote directory to /public_html")
    except Exception:
        print("✓ Already inside FTP root directory:", ftp.pwd())

    print(f"\nStarting deployment of files from: {LOCAL_DIR}\n" + "-"*50)
    upload_dir(ftp, LOCAL_DIR, "")
    print("-" * 50 + "\n🎉 Deployment successful! Your site files have been uploaded.")
    ftp.quit()

if __name__ == "__main__":
    main()
