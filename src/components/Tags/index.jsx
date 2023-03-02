import React from "react";
import './style.css'

const Tags = ({ getTag }) => {
  return (
    <div>
      <div className="tag">
        <p className="tag-text">{getTag}</p>
      </div>
    </div>
  );
};

export default Tags;
