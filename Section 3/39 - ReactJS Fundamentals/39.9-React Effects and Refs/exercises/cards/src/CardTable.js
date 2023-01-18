import React from "react";
import CardButton from "./CardButton.js";
import Card from "./Card.js";

import "./CardTable.css"

const CardTable = () => {

    return (
      <div className="CardTable">
        <CardButton />
        <div className="CardTable-Cards">
          <Card />
        </div>
      </div>
    );
}

export default CardTable;
