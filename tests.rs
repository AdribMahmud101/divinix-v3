#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::{Arc, Mutex};

    #[test]
    fn test_message_input_submit_prompt() {
        let submit_prompt = Arc::new(Mutex::new(|prompt: String| {
            assert_eq!(prompt, "Test prompt");
        }));
        let stop_response = Arc::new(Mutex::new(|| {}));
        let mut message_input = MessageInput::new(submit_prompt.clone(), stop_response.clone());
        message_input.submit_prompt("Test prompt".to_string());
    }

    #[test]
    fn test_messages_speak_message() {
        let send_prompt = Arc::new(Mutex::new(|prompt: String| {}));
        let regenerate_response = Arc::new(Mutex::new(|| {}));
        let messages = Messages::new(send_prompt.clone(), regenerate_response.clone());
        messages.speak_message("Test message".to_string());
    }

    #[test]
    fn test_model_selector_add_model() {
        let save_default_model = Arc::new(Mutex::new(|| {}));
        let show_settings = Arc::new(Mutex::new(|| {}));
        let mut model_selector = ModelSelector::new(save_default_model.clone(), show_settings.clone());
        model_selector.add_model();
        assert_eq!(model_selector.selected_models.len(), 2);
    }
}
