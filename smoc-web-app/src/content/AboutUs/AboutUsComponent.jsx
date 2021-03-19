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
        <div className="about-section-one">
        <h1>SMOC</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum          
          explicabo id adipisci ratione hic quidem in voluptatem quis expedita         
          quam, natus eius aliquam accusamus. Aliquid facere facilis autem          
          consequuntur possimus.
        </p>
        </div>

      
      <div className="about-section-two"> 
        
        <h1>OUR DOCTORS</h1>

        <div className="about-section-two-container-one">
          <div class="about-section-two-img">
            <img src={DRORTHO} alt="DRORTHO"></img>
          </div>         
            <p className="about-section-two-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium,minima laudantium officia, nesciunt at consequatur dolores ipsa
              dolor repudiandae necessitatibus provident excepturi ad explicabo
              architectlabore? Autem nisi aliquid natus!
            </p>          
        </div>

        <div className="about-section-two-container-two">
          <p className="about-section-two-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium,           
            minima laudantium officia, nesciunt at consequatur dolores ipsa
            dolor            
            repudiandae necessitatibus provident excepturi ad explicabo
            architecto            
            labore? Autem nisi aliquid natus!
          </p>
          <div className="about-section-two-img">
            <img src={PHYSICIAN} alt="DRPHY"></img>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
