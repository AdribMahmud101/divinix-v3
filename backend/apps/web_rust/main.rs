use actix_web::{web, App, HttpServer, Responder};
use actix_web::middleware::Logger;

struct AppState {
    auths: Auths,
    users: Users,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(Logger::default())
            .route("/auths", web::get().to(auths::get_session_user))
            .route("/auths/signin", web::post().to(auths::signin))
            .route("/auths/signup", web::post().to(auths::signup))
            .route("/users", web::get().to(users::get_users))
            .route("/users/{id}", web::get().to(users::get_user_by_id))
            .route("/users/{id}", web::put().to(users::update_user_by_id))
            .route("/users/{id}", web::delete().to(users::delete_user_by_id))
    })
    .bind("127.0.0.1:8000")?
    .run()
    .await
}
