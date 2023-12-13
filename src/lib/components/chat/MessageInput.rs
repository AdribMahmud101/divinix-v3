use std::sync::Arc;
use tokio::sync::Mutex;
use warp::Filter;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Clone, Deserialize, Serialize)]
pub struct MessageInput {
    submit_prompt: Arc<Mutex<dyn Fn(String) + Send + Sync>>,
    stop_response: Arc<Mutex<dyn Fn() + Send + Sync>>,
    suggestion_prompts: Vec<String>,
    auto_scroll: bool,
    files: Vec<File>,
    file_upload_enabled: bool,
    speech_recognition_enabled: bool,
    speech_recognition_listening: bool,
    prompt: String,
    messages: Vec<Message>,
}

#[derive(Clone, Deserialize, Serialize)]
pub struct File {
    type: String,
    url: String,
}

#[derive(Clone, Deserialize, Serialize)]
pub struct Message {
    id: Uuid,
    text: String,
}

impl MessageInput {
    pub fn new(submit_prompt: Arc<Mutex<dyn Fn(String) + Send + Sync>>, stop_response: Arc<Mutex<dyn Fn() + Send + Sync>>) -> Self {
        Self {
            submit_prompt,
            stop_response,
            suggestion_prompts: vec![],
            auto_scroll: true,
            files: vec![],
            file_upload_enabled: false,
            speech_recognition_enabled: true,
            speech_recognition_listening: false,
            prompt: String::new(),
            messages: vec![],
        }
    }

    pub fn speech_recognition_handler(&mut self) {
        // TODO: Implement speech recognition using a Rust library
    }

    pub fn submit_prompt(&mut self, prompt: String) {
        let submit_prompt = self.submit_prompt.lock().unwrap();
        submit_prompt(prompt);
    }

    pub fn stop_response(&mut self) {
        let stop_response = self.stop_response.lock().unwrap();
        stop_response();
    }

    pub fn on_change(&mut self, files: Vec<File>) {
        // TODO: Implement file handling
    }

    pub fn on_input(&mut self, input: String) {
        self.prompt = input;
    }
}
