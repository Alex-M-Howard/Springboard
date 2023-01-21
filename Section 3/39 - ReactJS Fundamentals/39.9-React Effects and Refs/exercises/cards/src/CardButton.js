import React from "react";

import "./CardButton.css";

const CardButton = ({ drawCard, autoDraw }) => {
    
    const handleAdd = () => {
        drawCard()
    }

    return (
      <button className="CardButton" onClick={handleAdd}>
        {autoDraw ? "STOP" : "KEEP"} DRAWING FOR ME!
      </button>
    );
}

export default CardButton;
