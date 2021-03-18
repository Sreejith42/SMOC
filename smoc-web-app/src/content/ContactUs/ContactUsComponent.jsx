import React from "react";
import "./ContactUsComponent.css";
import ContactHeader from "../../assests/ContactusImage.svg";

const ContactUsComponent = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <div className="contact-header-title">Media contact</div>
        <div className="contact-header-image">
          <img src={ContactHeader} alt="contactheader"></img>
        </div>
      </div>
      <div className="contact-section"></div>
    </div>
  );
};

export default ContactUsComponent;
