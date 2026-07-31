import { Store } from "@tauri-apps/plugin-store";

const store = await Store.load("settings.json");

export interface Settings {
  baseUrl: string;
  token: string;
  autoDownload: boolean;
  downloadPath: string | null;
}

const DEFAULT_SETTINGS: Settings = {
  baseUrl: "",
  token: "",
  autoDownload: false,
  downloadPath: null,
};

export async function loadSettings(): Promise<Settings> {
  return (
    (await store.get<Settings>("settings")) ??
    DEFAULT_SETTINGS
  );
}

export async function saveSettings(settings: Settings): Promise<void> {
  await store.set("settings", settings);
  await store.save();
}

export async function clearSettings(): Promise<void> {
  await store.delete("settings");
  await store.save();
}