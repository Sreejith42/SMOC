import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useRouteMatch } from "react-router-dom";
import OSC from "../../assests/osc.jpg";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import YouTube from "../../assests/youtube.png";
import Twitter from "../../assests/twitter.png";
import Instagram from "../../assests/instagram.png";
import Facebook from "../../assests/facebook.png";

const HeaderComponent = () => {
  const [header, setHeader] = useState("header");
  let about = useRouteMatch("/about-us");
  let gallery = useRouteMatch("/gallery");
  let contact = useRouteMatch("/contact-us");
  const [visible, setVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const listenScrollEvent = (event) => {
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

  const listenFrameEvent = (event) => {
    if (window.innerWidth <= 840) {
      return setMenuVisible(true);
    } else {
      return setMenuVisible(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 840) {
      setMenuVisible(true);
    } else {
      setMenuVisible(false);
    }
    window.addEventListener("resize", listenFrameEvent);
    return () => window.removeEventListener("resize", listenScrollEvent);
  }, []);

  return (
    <div className={header}>
      <div className="header-logo">
        <img src={OSC} alt="logo"></img>
        <p className="header-title-text">Ortho Zone</p>
      </div>
      <div className="social-media-navigation">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
        <img src={YouTube} alt="youtube" />
        <img src={Twitter} alt="twitter" />
      </div>
      {!menuVisible ? (
        <div className="header-link-part">
          <Link to="/" className={!(about || gallery || contact) && "active"}>
            Home
          </Link>
          <Link to="/about-us" className={about && "active"}>
            About Us
          </Link>
          <Link to="/gallery" className={gallery && "active"}>
            Testimonials
          </Link>
          <Link to="/contact-us" className={contact && "active"}>
            Contact Us
          </Link>
        </div>
      ) : (
        <div className="header-menu-part">
          <MenuOutlined className="icon-menu" onClick={showDrawer} />
        </div>
      )}

      <Drawer
        placement="right"
        closable={false}
        height={"100vh"}
        onClose={onClose}
        visible={visible}
      >
        <div className="header-drawer-content">
          <Link to="/" className={!(about || gallery || contact) && "active"}>
            Home
          </Link>
          <Link to="/about-us" className={about && "active"}>
            About Us
          </Link>
          <Link to="/gallery" className={gallery && "active"}>
            Testimonials
          </Link>
          <Link to="/contact-us" className={contact && "active"}>
            Contact Us
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default HeaderComponent;
