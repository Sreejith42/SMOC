import React from "react";
import "./gallery.css";
import MediaHeader from "../../assests/Mediaheader.svg";
import { Carousel } from "antd";
import { ArrowRightOutlined,ArrowLeftOutlined } from "@ant-design/icons";

const GalleryComponent = () => {
  const contentStyle = {
    height: "500px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="gallery">
      <div className="gallery-header">
        <div className="gallery-header-title">
          <h1>Media Gallery</h1></div>
        <div className="gallery-header-image">
          <img src={MediaHeader} alt="mediaheader"></img>
        </div>
      </div>
      <div className="gallery-section">
        <div>
          <h2>Images</h2>
          <div className="gallery-carousel">

          <Carousel arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>} >
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
        <div>
          <h2>Videos</h2>
          <div className="gallery-carousel">

          <Carousel arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>}>
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
