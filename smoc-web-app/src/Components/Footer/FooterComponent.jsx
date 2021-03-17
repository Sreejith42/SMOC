import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Logo from "../../assests/Footerlogo.svg";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-section-content">
        <div className="footer-section-content-one">
          <div className="header-logo head-height">
            <img src={Logo} alt="logo"></img>
          </div>
          <div>  
            <ul>         
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien.   
              </ul>         
          </div>
        </div>
        <div className="footer-section-content-two">
          <div className="head-height">
            <h3>Useful Links</h3>
            </div>
          <div className="link-section">
            <Link to="/home">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/gallery">Media Gallery</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
        <div className="footer-section-content-three">
          <div className="head-height">
           <h3>Address</h3> 
            </div>
          <div>
            Sports Medicine and Orthopeadic Center Gowreesapattom Pattom PO.
            Trivandrum Pin:695004
          </div>
        </div>
      </div>
      <div className="footer-section-copyright">
      Copyright ©2021 All rights reserved | Designed by FLYNT
      </div>
    </footer>
  );
};

export default FooterComponent;
