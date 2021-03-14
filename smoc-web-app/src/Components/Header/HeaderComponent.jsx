import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <div> logo</div>
      <div className="header-link-part">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/gallery">Media Gallery</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
