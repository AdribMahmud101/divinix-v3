use std::sync::Arc;
use tokio::sync::Mutex;
use warp::Filter;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Clone, Deserialize, Serialize)]
pub struct ModelSelector {
    selected_models: Vec<String>,
    disabled: bool,
    save_default_model: Arc<Mutex<dyn Fn() + Send + Sync>>,
    show_settings: Arc<Mutex<dyn Fn() + Send + Sync>>,
}

impl ModelSelector {
    pub fn new(save_default_model: Arc<Mutex<dyn Fn() + Send + Sync>>, show_settings: Arc<Mutex<dyn Fn() + Send + Sync>>) -> Self {
        Self {
            selected_models: vec![String::new()],
            disabled: false,
            save_default_model,
            show_settings,
        }
    }

    pub fn save_default_model(&self) {
        let save_default_model = self.save_default_model.lock().unwrap();
        save_default_model();
    }

    pub fn show_settings(&self) {
        let show_settings = self.show_settings.lock().unwrap();
        show_settings();
    }

    pub fn add_model(&mut self) {
        if self.selected_models.len() < 3 && !self.disabled {
            self.selected_models.push(String::new());
        }
    }

    pub fn remove_model(&mut self, index: usize) {
        if !self.disabled {
            self.selected_models.remove(index);
        }
    }

    pub fn select_model(&mut self, index: usize, model: String) {
        self.selected_models[index] = model;
    }
}
