import React from "react";

import "./Card.css";

const Card = ({ image, alt }) => {

    return (
        <img
            className="Card"
            src={image}
            alt={alt}
            style={{ transform: `rotate(${Math.random()}turn)` }}
        />
  )
};

export default Card;
