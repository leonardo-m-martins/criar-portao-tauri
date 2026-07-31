use std::path::Path;

#[tauri::command]
fn save_file_to_disk(path: String, bytes: Vec<u8>) -> Result<(), String> {
    let target_path = Path::new(&path);

    // Optional: Automatically create parent directories if they don't exist
    if let Some(parent) = target_path.parent() {
        std::fs::create_dir_all(parent).map_err(|e| e.to_string())?;
    }

    // Write file directly to disk
    std::fs::write(target_path, bytes).map_err(|e| e.to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_updater::Builder::new().build())
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_store::Builder::default().build())
        .invoke_handler(tauri::generate_handler![save_file_to_disk])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
