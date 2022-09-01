import { Container } from "./styles";

export function HomeHero() {
  return (
    <Container>
      <div className="main-div">
        <div className="text-div">
          <a className="title">Best Destinations around the world</a>
          <div className="div-img1">
            <img src={"./travel.png"} className="img-travel"></img>
          </div>
          <a className="subtitle">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </a>
          <div className="buttons">
            <button className="button1">Find out more</button>

            <div className="button-img">
              <img src="Play Demo.png" className="img-button"></img>
            </div>
          </div>
        </div>
        <div className="div-img2">
          <img src={"./mulherimg.png"} className="img-mulher"></img>
        </div>
      </div>
    </Container>
  );
}
