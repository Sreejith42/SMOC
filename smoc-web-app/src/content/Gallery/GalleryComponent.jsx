import React, { useState, useEffect } from "react";
import "./gallery.css";
import { ReactComponent as MediaHeader } from "../../assests/Mediaheader.svg";
import GalleryImageOne from "../../assests/GalleryImageOne.jpg";
import GalleryImageTwo from "../../assests/GalleryImageTwo.jpg";
import GalleryImageThree from "../../assests/GalleryImageThree.jpg";
import GalleryImageFour from "../../assests/GalleryImageFour.jpg";
import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const GalleryComponent = () => {
  const [contentStyle, setContentStyle] = useState();
  const listenFrameEvent = (event) => {
    if (window.innerWidth <= 500) {
      return setContentStyle({
        height: "150px",
        width: "100%",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      });
    } else if (window.innerWidth <= 900) {
      return setContentStyle({
        height: "200px",
        width: "100%",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      });
    } else {
      return setContentStyle({
        height: "500px",
        width: "100%",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      });
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setContentStyle({
        height: "150px",
        width: "100%",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      });
    } else if (window.innerWidth <= 900) {
      return setContentStyle({
        height: "200px",
        width: "100%",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      });
    } else {
      setContentStyle({
        height: "500px",
        width: "100%",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      });
    }
    window.addEventListener("resize", listenFrameEvent);
    return () => window.removeEventListener("resize", listenFrameEvent);
  }, []);
  return (
    <div className="gallery">
      <div className="home-header">
        <div className="home-header-section-one">
          <div className="align-middle">
            <h1>Testimonials </h1>
          </div>
          <div>
            <MediaHeader />
          </div>
        </div>
      </div>
      <div className="gallery-section">
        <div>
          <h2>Images</h2>
          <div className="gallery-carousel">
            <Carousel
              arrows
              autoplay
              nextArrow={<RightOutlined />}
              prevArrow={<LeftOutlined />}
            >
              <div>
                <img
                  src={GalleryImageOne}
                  style={contentStyle}
                  alt="galleryimageone"
                />
              </div>
              <div>
                <img
                  src={GalleryImageTwo}
                  style={contentStyle}
                  alt="galleryimagetwo"
                />
              </div>
              <div>
                <img
                  src={GalleryImageThree}
                  style={contentStyle}
                  alt="galleryimagethree"
                />
              </div>
              <div>
                <img
                  src={GalleryImageFour}
                  style={contentStyle}
                  alt="galleryimagefour"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div>
          <h2>Videos</h2>
          <div className="gallery-carousel">
            <Carousel
              arrows
              nextArrow={<RightOutlined />}
              prevArrow={<LeftOutlined />}
            >
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
