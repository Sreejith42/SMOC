import React from "react";
import "./ContactUsComponent.css";
import { ReactComponent as ContactHeader }  from "../../assests/ContactusImage.svg";
import { ReactComponent as HeaderImage } from "../../assests/homeheaderimage.svg";

import Map from "../../assests/Map.png";

const ContactUsComponent = () => {
  return (
    <div className="contact">   
      <div className="home-header">
        <div className="home-header-section-one">
          <div className="align-middle">
          <h1>Contact Us</h1>
          </div>
          <div>
            <ContactHeader />
          </div>
        </div>        
      </div>

      <div className="contact-section">
        <div className="contact-section-one">
          <img src={Map} alt="Map"></img>
        </div>

        <div className="contact-section-two">
          <div className="contact-section-two-opening">
            <div>Opening Hours</div>
            <div>Daily 2:00pm - 7:00pm</div>
          </div>
          <div className="contact-section-two-info">
            <div>Address:</div>
            <div>
              Sports Medicine and Orthopedic center Goereesapattom Pattom.PO
              Trivandrum pin:695004
            </div>
            <div>Email:</div>
            <div>smocpattom@gmail.com</div>

            <div>Mob:</div>

            <div className="contact-us-section-two-mob">
              <div>Dr.Sinivas R Orthopeadic Surgeon</div>
              <div>+91 9847222346</div>

              <div>Dr.Sinivas R Orthopeadic Surgeon</div>

              <div>+91 9847222346</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
