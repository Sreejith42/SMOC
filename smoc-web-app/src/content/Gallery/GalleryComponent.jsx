import React, { useState, useEffect } from "react";
import "./gallery.css";
// import { ReactComponent as MediaHeader } from "../../assests/Mediaheader.svg";
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
        height: "230px",
        width: "100%",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      });
    } else if (window.innerWidth <= 900) {
      return setContentStyle({
        height: "300px",
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
        height: "230px",
        width: "100%",
        color: "#fff",
        lineHeight: "160px",
        textAlign: "center",
        background: "#364d79",
      });
    } else if (window.innerWidth <= 900) {
      return setContentStyle({
        height: "300px",
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
        {/* <div className="home-header-section-one">
          <div className="align-middle">
            <h1>Media Gallery</h1>
            <br/>
            <ul className="about-us-content-list">
              ' Here are some images and videos
              <br /> that perfectly describe our profession.
              <br /> Scroll and have a go through it '
            </ul>
          </div>
          <div>
            <MediaHeader />
          </div>
        </div> */}
      </div>
      <div className="gallery-section">
        <div>
        <h1>Media Gallery</h1>
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
                <iframe
                  style={contentStyle}
                  src="https://www.youtube.com/embed/klCq8hZ0JNw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  style={contentStyle}
                  src="https://www.youtube.com/embed/slG4auRJano"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  style={contentStyle}
                  src="https://www.youtube.com/embed/7qbpGUeBpOs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  style={contentStyle}
                  src="https://www.youtube.com/embed/fXptnVR-hME"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  style={contentStyle}
                  src="https://www.youtube.com/embed/g4N3z-nLLag"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
