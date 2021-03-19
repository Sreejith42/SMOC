import React from "react";
import "./AboutUsComponent.css";
import AboutHeader from "../../assests/AboutusImage.svg";
import DRORTHO from "../../assests/DrSrinivas.svg";
import PHYSICIAN from "../../assests/DrGopan.svg";
const AboutUsComponent = () => {
  return (
    <div className="about">
      <div className="about-header">
        <div className="about-header-title">
          <h1>About us</h1>
        </div>
        <div className="about-header-image">
          <img src={AboutHeader} alt="aboutheader"></img>
        </div>
      </div>

      <div className="about-section">
        <h1>SMOC</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          <br></br>
          explicabo id adipisci ratione hic quidem in voluptatem quis expedita
          <br></br>
          quam, natus eius aliquam accusamus. Aliquid facere facilis autem
          <br></br>
          consequuntur possimus.
        </p>
        <br></br>
        <h2>OUR DOCTORS</h2>

        <div className="container1">
          <div class="image-col1">
            <img src={DRORTHO} alt="DRORTHO"></img>
          </div>
          <div classname="textcol1">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium,
              <br></br>
              minima laudantium officia, nesciunt at consequatur dolores ipsa
              dolor
              <br></br>
              repudiandae necessitatibus provident excepturi ad explicabo
              architecto
              <br></br>
              labore? Autem nisi aliquid natus!
            </p>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <div className="container2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium,
            <br></br>
            minima laudantium officia, nesciunt at consequatur dolores ipsa
            dolor
            <br></br>
            repudiandae necessitatibus provident excepturi ad explicabo
            architecto
            <br></br>
            labore? Autem nisi aliquid natus!
          </p>
          <div className="img-col2">
            <img src={PHYSICIAN} alt="DRPHY"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
