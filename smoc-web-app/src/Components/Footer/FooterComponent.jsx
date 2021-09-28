import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import OSC from "../../assests/osc.jpg";
import YouTube from "../../assests/youtube.png";
import Twitter from "../../assests/twitter.png";
import Instagram from "../../assests/instagram.png";
import Facebook from "../../assests/facebook.png";

const FooterComponent = () => {
  const handleClickFacebook = () => {
    window.open("https://www.facebook.com/orthozonetvm/");
  };

  const handleClickInstagram = () => {
    window.open("https://instagram.com/orthozonetvm?utm_medium=copy_link");
  };

  const handleCliCkTwitter = () => {
    window.open("https://twitter.com/ZoneOrtho");
  };

  const handleClickYoutube = () => {
    window.open("https://www.youtube.com/channel/UCLooonVA3Ft1i3KtKP5_chg");
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer>
      <div className="footer-section-content">
        <div className="footer-section-content-one">
          <div className="header-logo head-height-logo">
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
            <Link to="/" onClick={() => scrollToTop()}>
              Home
            </Link>
            <Link to="/about-us" onClick={() => scrollToTop()}>
              About Us
            </Link>
            <Link to="/gallery" onClick={() => scrollToTop()}>
              Testimonials
            </Link>
            <Link to="/contact-us" onClick={() => scrollToTop()}>
              Contact Us
            </Link>
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
        <img
          src={Facebook}
          alt="facebook"
          onClick={() => handleClickFacebook()}
        />
        <img
          src={Instagram}
          alt="instagram"
          onClick={() => handleClickInstagram()}
        />
        <img src={YouTube} alt="youtube" onClick={() => handleClickYoutube()} />
        <img src={Twitter} alt="twitter" onClick={() => handleCliCkTwitter()} />
      </div>
      <div className="footer-section-copyright">
        Copyright © 2021 All rights reserved by FLYNT TECHNOLOGIES
      </div>
    </footer>
  );
};

export default FooterComponent;
