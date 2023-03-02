import React from "react";
import './style.css'

const HomeBanner = ({ image, title }) => {
  return (
    <div className="homeBanner">
      <img src={image} alt="" className="homeBanner-img" />
      <h2 className="homeBanner-text">{title}</h2>
    </div>
  );
};

export default HomeBanner;