import { BsHouse, BsMap } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { Container } from "./styles";

export function NextTrip() {
  return (
    <Container>
      <img src="/fundo4.png" />
      <div className="content">
        <div className="left-content">
          <h1 className="left-title">Easy and Fast</h1>
          <h2 className="left-subtitle">Book Your Next Trip In 3 Easy Steps</h2>
          <div className="left-card">
            <div className="left-subcard">
              <div className="left-subcard-img">
                <img className="left-subcard-img" src="/Group 12.png"></img>
              </div>
              <a className="left-subcard-title">Choose Destination</a>
              <a className="left-subcard-subtitle">
                Lorem ipsum dolor sit amet, consectetu
              </a>
            </div>

            <div className="left-subcard">
              <div className="left-subcard-img">
                <img className="left-subcard-img" src="/Group 11.png"></img>
              </div>
              <a className="left-subcard-title">Make Payment</a>
              <a className="left-subcard-subtitle">
                Lorem ipsum dolor sit amet, consectetu
              </a>
            </div>

            <div className="left-subcard">
              <div className="left-subcard-img">
                <img className="left-subcard-img" src="/Group 7.png"></img>
              </div>
              <a className="left-subcard-title">
                Reach Airport on Selected Date
              </a>
              <a className="left-subcard-subtitle">
                Lorem ipsum dolor sit amet, consectetu
              </a>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div className="right-card">
            <div className="right-card-img">
              <img className="right-card-img" src="/Rectangle 17.png"></img>
            </div>
            <a className="right-title">Trip To Greece</a>
            <a className="right-subtitle">14-29 October | by Robbin</a>
            <div className="right-icons">
              <BsMap color="black"></BsMap>{" "}
              <FaTelegramPlane color="black"></FaTelegramPlane>
            </div>
            <div className="right-footer">
              <BsHouse></BsHouse>8 People
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
