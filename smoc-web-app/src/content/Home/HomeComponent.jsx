import React from "react";
import "./home.css";
import { ReactComponent as HeaderImage } from "../../assests/homeheaderimage.svg";
// import WheelChair from "../../assests/wheelchairassist.svg";
import Orthopeadic from "../../assests/Orthopedics.svg";
import Physiotherapy from "../../assests/Physiotherapy.svg";
import sportmedicine from "../../assests/Sportsmedicine.svg";

const HomeComponent = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-section-one">
          <div className="align-middle">
            <h1>Sports Medicine &</h1>
            <h1>Orthopeadic Center</h1>
          </div>
          <div>
            <HeaderImage />
          </div>
        </div>        
      </div>
      <div className="home-section">
        <div className="home-section-one">
          <div className="home-section-items">
            <h2>Orthopeadics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut
            </p>
          </div>
          <div className="home-section-one-img">
            <img src={Orthopeadic} alt="ortho" />
          </div>
        </div>
        <div className="home-section-two">
          <div className="home-section-two-img">
            <img src={sportmedicine} alt="sport" />
          </div>
          <div className="home-section-items-middle">
            <h2>Sports Medicine</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut
            </p>
          </div>
        </div>
        <div className="home-section-three">
          <div className="home-section-items">
            <h2>Physiotherapy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut
            </p>
          </div>
          <div className="home-section-three-img">
            <img src={Physiotherapy} alt="physio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
