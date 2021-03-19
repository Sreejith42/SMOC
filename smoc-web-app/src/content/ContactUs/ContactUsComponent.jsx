import React from "react";
import "./ContactUsComponent.css";
import ContactHeader from "../../assests/ContactusImage.svg";
import Map from "../../assests/Map.png";

const ContactUsComponent = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="contact-header-title">Contact Us</div>
        <div className="contact-header-image">
          <img src={ContactHeader} alt="contactheader"></img>
        </div>
      </div>

      <div className="contact-section">
        <br></br>
        <br></br>
        <div className="container">
          <img src={Map} alt="Map"></img>
          <p>
            Address: Sports Medicine and<br></br> Orthopedic center <br></br>
            Goereesapattom Pattom.PO <br></br>Trivandrum<br></br> pin:695004
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
