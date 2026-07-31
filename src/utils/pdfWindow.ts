import { WebviewWindow } from "@tauri-apps/api/webviewWindow";

export async function openPdfWindow(url: string, label: string) {
  console.log("PDF Opening...");

  const webview = new WebviewWindow(label, {
    url: url,
    title: "PDF Viewer",
    maximized: true
  });

  // Listen for the created event BEFORE or alongside initialization,
  // or simply await webview.once()
  webview.once("tauri://created", () => {
    console.log("Window & Webview successfully created!");
  });

  webview.once("tauri://error", (e) => {
    console.error("An error happened creating the window/webview: ", e);
  });
}