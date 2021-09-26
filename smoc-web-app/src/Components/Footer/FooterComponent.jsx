import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import OSC from "../../assests/osc.jpg";
import YouTube from "../../assests/youtube.png";
import Twitter from "../../assests/twitter.png";
import Instagram from "../../assests/instagram.png";
import Facebook from "../../assests/facebook.png";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-section-content">
        <div className="footer-section-content-one">
          <div className="header-logo head-height">
            <img src={OSC} alt="logo"></img>
            <p className="header-title-text">Ortho Zone</p>
          </div>
          <div className="footer-details">
            Specialist in Joint Preservation (conservative treatment,
            arthroscopy, open surgery and osteotomy) & Joint Replacement
            (primary, complex primary and revision surgery). Keen interest in
            research and management of Infected Joint Replacements.
          </div>
        </div>
        <div className="footer-section-content-two">
          <div className="head-height">
            <h3>Useful Links</h3>
          </div>
          <div className="link-section">
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/gallery">Testimonials</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="footer-section-content-three">
          <div className="head-height">
            <h3>Address</h3>
          </div>
          <div className="footer-address">
            <div>
              Ortho Zone,
              <br />
              TC 13/851 KVR - 237,
              <br />
              Mulavana Junction, Vanchiyoor PO,
              <br />
              Thiruvananthapuram - 695035
            </div>
          </div>
        </div>
      </div>
      <div className="social-media-navigation footer-social-navigation">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
        <img src={YouTube} alt="youtube" />
        <img src={Twitter} alt="twitter" />
      </div>
      <div className="footer-section-copyright">
        Copyright © 2021 All rights reserved by FLYNT TECHNOLOGIES
      </div>
    </footer>
  );
};

export default FooterComponent;
