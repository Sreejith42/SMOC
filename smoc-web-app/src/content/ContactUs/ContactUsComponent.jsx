import React from "react";
import "./ContactUsComponent.css";
import { ReactComponent as ContactHeader } from "../../assests/ContactusImage.svg";
// import { ReactComponent as HeaderImage } from "../../assests/homeheaderimage.svg";

// import Map from "../../assests/Map.png";

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8661992577054!2d76.92587981473075!3d8.512369793880328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb5d9e16ba5%3A0x2307c8d6db328e6c!2sOrtho%20Zone!5e0!3m2!1sen!2sin!4v1632240592099!5m2!1sen!2sin"
            height="450"
            style={{height:"-webkit-fill-available"}}
            title="our location"
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-section-two">
          <div className="contact-section-two-opening">
            <h2>Opening Hours</h2>
            <h2>Daily 2:00pm - 7:00pm</h2>
          </div>
          <div className="contact-section-two-info">
            <div>Address :</div>
            <div>
              Ortho Zone,
              <br />
              TC 13/851 KVR - 237,
              <br />
              Mulavana Junction, Vanchiyoor PO,
              <br />
              Thiruvananthapuram - 695035
            </div>
            <div>Email :</div>
            <div>orthozonetvm@gmail.com</div>

            <div>Phone :</div>

            <div className="contact-us-section-two-mob">
              <div>Dr.Sinivas R </div>
              <div>+91 9847222346</div>

              <div>Dr GOPAN N </div>

              <div>+91 9496351211</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
