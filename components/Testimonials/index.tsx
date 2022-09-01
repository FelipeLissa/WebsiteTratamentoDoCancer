import { Container } from "./styles";

export function Testimonials() {
  return (
    <Container>
      <div className="content">
        <div className="left-content">
          <a className="left-title">Testimonials</a>
          <a className="left-subtitle">What People Say About Us.</a>
        </div>
        <div className="right-content">
          <div className="right-card-content">
            <div className="right-card">
              <img className="avatar-img" src="image.png"></img>
              <a className="right-card-description">
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </a>
              <a className="right-card-name">Mike taylor</a>
              <a className="right-card-location">Lahore, Pakistan</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
