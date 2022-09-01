import { Container } from "./styles";

export function Category() {
  return (
    <Container>
      <img src="/Category.png" />

      <div className="category">
        <h1 className="title">Category</h1>
        <h2 className="subtitle">We offer the Best Services</h2>

        <div className="cards">
          <div className="card">
            <div className="card-img">
              <img src="/Grupo 51.png" className="card-img"></img>
            </div>
            <a className="card-title">Calculated Weather</a>
            <a className="card-subtitle">
              Built Wicket longer admire do barton vanity itself do in it.
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/Group 48.png" className="card-img"></img>
            </div>
            <a className="card-title">Best Flights</a>
            <a className="card-subtitle">
              Engrossed listening. Park gate sell they west hard for the.
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/Group 50.png" className="card-img"></img>
            </div>
            <a className="card-title">Local Events</a>
            <a className="card-subtitle">
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/Group 42.png" className="card-img"></img>
            </div>
            <a className="card-title">Customization</a>
            <a className="card-subtitle">
              We deliver outsourced aviation services for military customers.
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
