import React,{useEffect,useState} from "react";
import "./header.css";
import { Link,useRouteMatch } from "react-router-dom";
import Logo from "../../assests/Footerlogo.svg";

const HeaderComponent = () => {
  const [header, setHeader] = useState("header"); 
  let about =useRouteMatch("/about-us");
  let gallery=useRouteMatch("/gallery");
  let contact =useRouteMatch("/contact-us")

  
  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  

  return (
    <div className={header}>      
      <div className="header-logo"><img src={Logo} alt="logo"></img></div>
      <div className="header-link-part">
        <Link to="/" className={!(about||gallery||contact)&&"active"} >Home</Link>
        <Link to="/about-us" className={about&&"active"} >About Us</Link>
        <Link to="/gallery" className={gallery&&"active"}>Media Gallery</Link>
        <Link to="/contact-us" className={contact&&"active"}>Contact Us</Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
