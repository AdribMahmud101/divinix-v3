use actix_web::{web, App, HttpServer, Responder, middleware, client};
use actix_web::client::Client;
use actix_web::web::{Data, Payload};
use actix_web::HttpResponse;
use bytes::BytesMut;
use futures::StreamExt;

struct AppState {
    target_url: String,
}

async fn forward_request(
    data: Data<AppState>,
    payload: Payload,
    client: web::Data<Client>,
) -> impl Responder {
    let mut payload_bytes = BytesMut::new();
    let mut payload_stream = payload.into_inner();

    while let Some(chunk) = payload_stream.next().await {
        payload_bytes.extend_from_slice(&chunk.unwrap());
    }

    let request_body = String::from_utf8(payload_bytes.to_vec()).unwrap();

    let forwarded_response = client
        .request(actix_web::http::Method::GET, &data.target_url)
        .send_body(request_body)
        .await;

    match forwarded_response {
        Ok(mut res) => {
            let body = res.body().await.unwrap();
            HttpResponse::Ok().body(body)
        }
        Err(_) => HttpResponse::InternalServerError().finish(),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .data(AppState {
                target_url: String::from("http://localhost:8000"),
            })
            .wrap(middleware::Logger::default())
            .service(
                web::resource("/{path:.*}")
                    .route(web::get().to(forward_request))
                    .route(web::post().to(forward_request))
                    .route(web::put().to(forward_request))
                    .route(web::delete().to(forward_request)),
            )
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
