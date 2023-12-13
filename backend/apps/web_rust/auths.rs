use actix_web::{web, HttpResponse, Error};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Serialize, Deserialize)]
struct AuthModel {
    id: Uuid,
    email: String,
    password: String,
    active: bool,
}

#[derive(Serialize, Deserialize)]
struct Token {
    token: String,
    token_type: String,
}

#[derive(Serialize, Deserialize)]
struct UserResponse {
    id: Uuid,
    email: String,
    name: String,
    role: String,
    profile_image_url: String,
}

#[derive(Serialize, Deserialize)]
struct SigninResponse {
    token: Token,
    user: UserResponse,
}

#[derive(Deserialize)]
struct SigninForm {
    email: String,
    password: String,
}

#[derive(Deserialize)]
struct SignupForm {
    name: String,
    email: String,
    password: String,
}

fn insert_new_auth(email: String, password: String, name: String, role: String) -> Option<UserModel> {
    // Insert new auth logic here
}

fn authenticate_user(email: String, password: String) -> Option<UserModel> {
    // Authenticate user logic here
}

async fn get_session_user() -> Result<HttpResponse, Error> {
    // Get session user logic here
}

async fn signin(form_data: web::Json<SigninForm>) -> Result<HttpResponse, Error> {
    // Sign in logic here
}

async fn signup(form_data: web::Json<SignupForm>) -> Result<HttpResponse, Error> {
    // Sign up logic here
}
