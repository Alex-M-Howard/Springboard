import React, {useState} from 'react';
import Box from './Box.js';
import NewBoxForm from './NewBoxForm.js'
import { v4 as uuidv4 } from "uuid";
import './BoxList.css'

const BoxList = () =>{
  const INITAL_STATE = [{color:'blue'}, {color:'red'}, ];
 
  const [boxes, setBoxes] = useState(INITAL_STATE);

  const updateBoxes = box => {

    setBoxes(() => {
        console.log(boxes);
        console.log(box);
      const newBoxes = [...boxes, box];
      return newBoxes;
    });
  }

  return (
    <div className="BoxList">
      <NewBoxForm className="BoxList-NewBoxForm" updateBoxes={updateBoxes} />
      <div className="BoxList-Boxes">
        <Box />
        <Box />
        <Box />
        {boxes.map((box) => {
          return (
            <Box
              className="BoxList-Box"
              color={box.color}
              width={box.width}
              height={box.height}
              key={uuidv4()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BoxList;
