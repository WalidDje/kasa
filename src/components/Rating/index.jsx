import React from "react";
import './style.css';
import redstar from "../../assets/Red_star.svg";
import greystar from "../../assets/grey_star.svg";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating-star"
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="rating-star"
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rating;
