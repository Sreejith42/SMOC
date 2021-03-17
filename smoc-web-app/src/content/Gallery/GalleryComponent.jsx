import React from "react";
import "./gallery.css";
import MediaHeader from "../../assests/Mediaheader.svg";

const GalleryComponent = () => {
  return (
    <div className="gallery">
      <div className="gallery-header">
        <div className="gallery-header-title">Media Gallery</div>
        <div className="gallery-header-image">
          <img src={MediaHeader} alt="mediaheader"></img>
        </div>
      </div>
      <div className="gallery-section"></div>
    </div>
  );
};

export default GalleryComponent;
