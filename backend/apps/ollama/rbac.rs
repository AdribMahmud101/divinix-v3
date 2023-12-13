use actix_web::HttpRequest;
use std::collections::HashMap;

pub struct User {
    pub username: String,
    pub role: String,
}

pub fn extract_token_from_auth_header(req: &HttpRequest) -> Option<String> {
    let headers = req.headers();
    let auth_header = headers.get("Authorization")?;
    let token = auth_header.to_str().ok()?;
    Some(token.to_string())
}

pub fn get_user_by_token(token: &str) -> Option<User> {
    let user_db: HashMap<String, User> = HashMap::new(); // Mock user database
    user_db.get(token).cloned()
}
