import { Container } from "./styles";
import { BsFillCursorFill } from "react-icons/bs";
export function TopSelling() {
  return (
    <Container>
      <img src="/fundo3.png" />
      <div className="category">
        <h1 className="title">Top Selling</h1>
        <h2 className="subtitle">Top Destinations</h2>

        <div className="cards">
          <div className="card">
            <div className="card-img">
              <img src="/Rectangle 14.png" className="card-img"></img>
            </div>
            <div className="div-title">
              <a className="card-title">Rome,Italy</a>
              <a className="card-price">$5,42k</a>
            </div>
            <a className="card-subtitle">
              <BsFillCursorFill></BsFillCursorFill> 14 Days Trip
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/Rectangle 15.png" className="card-img"></img>
            </div>
            <div className="div-title">
              <a className="card-title">Rome,Italy</a>
              <a className="card-price">$5,42k</a>
            </div>
            <a className="card-subtitle">
              <BsFillCursorFill></BsFillCursorFill> 22 Days Trip
            </a>
          </div>
          <div className="card">
            <div className="card-img">
              <img src="/Rectangle 16.png" className="card-img"></img>
            </div>
            <div className="div-title">
              <a className="card-title">Rome,Italy</a>
              <a className="card-price">$5,42k</a>
            </div>
            <a className="card-subtitle">
              <BsFillCursorFill></BsFillCursorFill> 10 Days Trip
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
