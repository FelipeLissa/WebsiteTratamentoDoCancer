import { Container } from "./styles";

export function Subscribe() {
  return (
    <Container>
      <div className="subscribe-container">
        <img className="subscribe-img" src="Grupo 133.png"></img>
        <div className="subscribe-content">
          <a className="subscribe-title">
            Subscribe to get information, latest news and other interesting
            offers about Cobham
          </a>
          <div className="subscribe-buttons">
            <button className="subscribe-button-1">Your Email</button>
            <button className="subscribe-button-2">Subscribe</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
