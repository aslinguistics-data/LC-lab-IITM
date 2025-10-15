import os
import pathlib
import queue
import subprocess
import threading
import tkinter as tk
from tkinter import ttk, messagebox, filedialog
from ftplib import FTP, FTP_TLS, error_perm
from shutil import which
import platform
import datetime

IS_WINDOWS = platform.system() == "Windows"


def find_exe(name: str):
    """Find executable path for npm/node on Windows/Linux."""
    if IS_WINDOWS:
        for candidate in (f"{name}.cmd", name):
            p = which(candidate)
            if p:
                return p
        return None
    else:
        return which(name)


def run_streamed(cmd, cwd=None, env=None, log=lambda s: None):
    """Run a command and stream output line by line into log()."""
    exe_path = find_exe(cmd[0])
    final_cmd = cmd[:]
    if exe_path:
        final_cmd[0] = exe_path
    elif IS_WINDOWS:
        final_cmd = ["cmd", "/c"] + cmd

    log(f"→ Running: {' '.join(final_cmd)} (cwd={cwd})")
    proc = subprocess.Popen(
        final_cmd,
        cwd=cwd,
        env=env,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        universal_newlines=True,
    )
    for line in proc.stdout:
        log(line.rstrip())
    proc.wait()
    if proc.returncode != 0:
        raise RuntimeError(f"Command failed ({proc.returncode}): {' '.join(final_cmd)}")


def git_commit_and_push(project_dir, log):
    try:
        # Stage changes
        run_streamed(["git", "add", "."], cwd=project_dir, log=log)

        # Commit with timestamp message
        timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        commit_msg = f"Auto deploy commit at {timestamp}"
        run_streamed(["git", "commit", "-m", commit_msg], cwd=project_dir, log=log)

        # Push to main branch
        run_streamed(["git", "push", "origin", "main"], cwd=project_dir, log=log)

        log("✓ Git changes committed and pushed successfully")
    except RuntimeError as e:
        log(f"✗ Git operation failed: {e}")


class FTPDeployer(threading.Thread):
    def __init__(
        self,
        project_dir,
        host,
        user,
        password,
        remote_dir,
        out_dir,
        use_ftps,
        skip_build,
        log_queue,
    ):
        super().__init__(daemon=True)
        self.project_dir = pathlib.Path(project_dir).resolve()
        self.host = host
        self.user = user
        self.password = password
        self.remote_dir = remote_dir
        self.out_dir = pathlib.Path(out_dir).resolve()
        self.use_ftps = use_ftps
        self.skip_build = skip_build
        self.log_queue = log_queue

    def log(self, msg):
        self.log_queue.put(msg)

    def connect(self):
        if self.use_ftps:
            ftp = FTP_TLS(timeout=60)
            ftp.connect(self.host, 21)
            ftp.auth()
            ftp.prot_p()
        else:
            ftp = FTP(timeout=60)
            ftp.connect(self.host, 21)
        ftp.login(self.user, self.password)
        ftp.set_pasv(True)
        self.log(ftp.getwelcome())
        return ftp

    def ensure_remote_dir(self, ftp, path):
        parts = [p for p in path.split("/") if p]
        cur = ""
        for part in parts:
            cur = f"{cur}/{part}"
            try:
                ftp.mkd(cur)
                self.log(f"   created {cur}")
            except error_perm as e:
                if not str(e).startswith("550"):
                    raise

    def upload_file(self, ftp, local_path: pathlib.Path, remote_path: str):
        with open(local_path, "rb") as f:
            ftp.storbinary(f"STOR {remote_path}", f)
        self.log(f"↑ Uploaded: {remote_path}")

    def run(self):
        try:
            if not self.skip_build:
                if not (self.project_dir / "package.json").exists():
                    raise RuntimeError(f"No package.json in {self.project_dir}")

                self.log("=== Building Next.js static export (npm run build) ===")
                run_streamed(
                    ["npm", "run", "build"], cwd=self.project_dir, log=self.log
                )

            if not self.out_dir.exists():
                raise RuntimeError(f"Export directory not found: {self.out_dir}")

            self.log("=== Connecting to FTP ===")
            ftp = self.connect()
            try:
                self.ensure_remote_dir(ftp, self.remote_dir)

                self.log(f"=== Uploading from {self.out_dir} to {self.remote_dir} ===")
                for path in self.out_dir.rglob("*"):
                    if path.is_file():
                        rel = str(path.relative_to(self.out_dir)).replace("\\", "/")
                        remote_path = f"{self.remote_dir}/{rel}"
                        remote_dir = os.path.dirname(remote_path)
                        self.ensure_remote_dir(ftp, remote_dir)
                        self.upload_file(ftp, path, remote_path)

                self.log("✓ Deployment complete")
                self.log("=== Committing and pushing changes to git ===")
                git_commit_and_push(self.project_dir, self.log)

            finally:
                try:
                    ftp.quit()
                except Exception:
                    ftp.close()
        except Exception as e:
            self.log(f"✗ ERROR: {e}")


class DeployGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Next.js → FTP Deployer")
        self.log_queue = queue.Queue()


        frm = ttk.Frame(root, padding=10)
        frm.grid(row=0, column=0, sticky="nsew")

        # Project root
        ttk.Label(frm, text="Project folder (package.json):").grid(
            row=0, column=0, sticky="w"
        )
        self.entry_project = ttk.Entry(frm, width=50)
        self.entry_project.insert(0, os.getcwd())
        self.entry_project.grid(row=0, column=1, sticky="ew")
        ttk.Button(frm, text="Browse", command=self.browse_project).grid(
            row=0, column=2, padx=5
        )

        # out/ folder
        ttk.Label(frm, text="Local out/ folder:").grid(row=1, column=0, sticky="w")
        self.entry_out = ttk.Entry(frm, width=50)
        self.entry_out.insert(0, "out")
        self.entry_out.grid(row=1, column=1, sticky="ew")
        ttk.Button(frm, text="Browse", command=self.browse_out).grid(
            row=1, column=2, padx=5
        )

        # Server / creds
        ttk.Label(frm, text="FTP Server:").grid(row=2, column=0, sticky="w")
        self.entry_host = ttk.Entry(frm, width=50)
        self.entry_host.insert(0, "home.iitm.ac.in")
        self.entry_host.grid(row=2, column=1, sticky="ew")

        ttk.Label(frm, text="Remote folder:").grid(row=3, column=0, sticky="w")
        self.entry_dir = ttk.Entry(frm, width=50)
        self.entry_dir.insert(0, "/anindita")
        self.entry_dir.grid(row=3, column=1, sticky="ew")

        ttk.Label(frm, text="Username:").grid(row=4, column=0, sticky="w")
        self.entry_user = ttk.Entry(frm, width=50)
        self.entry_user.grid(row=4, column=1, sticky="ew")

        ttk.Label(frm, text="Password:").grid(row=5, column=0, sticky="w")
        self.entry_pass = ttk.Entry(frm, width=50, show="*")
        self.entry_pass.grid(row=5, column=1, sticky="ew")

        # Options
        self.use_ftps = tk.BooleanVar(value=True)
        ttk.Checkbutton(frm, text="Use FTPS (TLS)", variable=self.use_ftps).grid(
            row=6, column=1, sticky="w"
        )
        self.skip_build = tk.BooleanVar(value=False)
        ttk.Checkbutton(
            frm, text="Skip build (just upload out/)", variable=self.skip_build
        ).grid(row=7, column=1, sticky="w")

        self.btn_pull = ttk.Button(frm, text="Pull Changes", command=self.pull_changes)
        self.btn_pull.grid(row=8, column=0, pady=10, sticky="w")


        self.btn_deploy = ttk.Button(frm, text="Deploy", command=self.deploy)
        self.btn_deploy.grid(row=8, column=1, pady=10, sticky="e")

        # Log window
        self.text_log = tk.Text(root, wrap="word", height=20)
        self.text_log.grid(row=1, column=0, sticky="nsew")
        root.grid_rowconfigure(1, weight=1)
        root.grid_columnconfigure(0, weight=1)

        self.root.after(150, self.poll_log)
    def pull_changes(self):
        project_dir = self.entry_project.get().strip()
        if not project_dir:
            messagebox.showerror("Error", "Project directory must be specified")
            return

        self.text_log.delete("1.0", tk.END)
        self.btn_pull.config(state="disabled")
        self.btn_deploy.config(state="disabled")

        def log(msg):
            self.log_queue.put(msg)

        def worker():
            try:
                log(f"=== Pulling changes from origin/main in {project_dir} ===")
                run_streamed(["git", "pull", "origin", "main"], cwd=project_dir, log=log)
                log("✓ Pull complete")
            except RuntimeError as e:
                log(f"✗ Pull failed: {e}")
            finally:
                self.root.after(0, lambda: self.btn_pull.config(state="normal"))
                self.root.after(0, lambda: self.btn_deploy.config(state="normal"))
                self.log_queue.put("— Done —")

        threading.Thread(target=worker, daemon=True).start()

    def browse_project(self):
        path = filedialog.askdirectory(
            title="Select Next.js project folder (contains package.json)"
        )
        if path:
            self.entry_project.delete(0, tk.END)
            self.entry_project.insert(0, path)

    def browse_out(self):
        path = filedialog.askdirectory(title="Select out/ folder")
        if path:
            self.entry_out.delete(0, tk.END)
            self.entry_out.insert(0, path)

    def deploy(self):
        project_dir = self.entry_project.get().strip()
        out_dir = self.entry_out.get().strip()
        host = self.entry_host.get().strip()
        user = self.entry_user.get().strip()
        password = self.entry_pass.get().strip()
        remote_dir = self.entry_dir.get().strip()
        use_ftps = self.use_ftps.get()
        skip_build = self.skip_build.get()

        if not all([project_dir, out_dir, host, user, password, remote_dir]):
            messagebox.showerror("Error", "All fields must be filled")
            return

        self.text_log.delete("1.0", tk.END)
        self.btn_deploy.config(state="disabled")

        t = FTPDeployer(
            project_dir,
            host,
            user,
            password,
            remote_dir,
            out_dir,
            use_ftps,
            skip_build,
            self.log_queue,
        )
        t.start()

        def watcher():
            t.join()
            self.log_queue.put("— Done —")
            self.root.after(0, lambda: self.btn_deploy.config(state="normal"))

        threading.Thread(target=watcher, daemon=True).start()

    def poll_log(self):
        while not self.log_queue.empty():
            msg = self.log_queue.get()
            self.text_log.insert(tk.END, msg + "\n")
            self.text_log.see(tk.END)
        self.root.after(150, self.poll_log)


if __name__ == "__main__":
    root = tk.Tk()
    app = DeployGUI(root)
    root.mainloop()
