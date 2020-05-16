use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: std::string::String) -> std::string::String {
    return format!("Hello {}! Sincerely, Rust.", name);
}
