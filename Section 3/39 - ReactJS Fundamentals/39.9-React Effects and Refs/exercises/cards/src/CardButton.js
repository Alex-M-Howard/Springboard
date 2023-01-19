import React from "react";

import "./CardButton.css";

const CardButton = ({ drawCard }) => {
    
    const handleAdd = () => {
        drawCard()
    }

    return (
        <button
            className="CardButton"
            onClick={handleAdd}
        > GIMME A CARD!</button>
    )
}

export default CardButton;
