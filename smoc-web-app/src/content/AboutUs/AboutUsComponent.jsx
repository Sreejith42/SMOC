import React from "react";
import "./AboutUsComponent.css";
import AboutHeader from "../../assests/AboutusImage.svg";

const AboutUsComponent = () => {
  return (
    <div className="about">
      <div className="about-header">
        <div className="about-header-title">Media about</div>
        <div className="about-header-image">
          <img src={AboutHeader} alt="aboutheader"></img>
        </div>
      </div>
      <div className="about-section"></div>
    </div>
  );
};

export default AboutUsComponent;
