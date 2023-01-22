import React, {useState} from 'react';
import Box from './Box.js';
import NewBoxForm from './NewBoxForm.js'
import './BoxList.css'

const BoxList = () =>{
  const INITAL_STATE = [];
 
  const [boxes, setBoxes] = useState(INITAL_STATE);

  const addBox = box => {
    setBoxes(boxes => [...boxes, box]);
  };

  const handleRemove = id => {
   setBoxes(boxes => boxes.filter(box => box.id !== id));
  };

  return (
    <div className="BoxList">
      <NewBoxForm className="BoxList-NewBoxForm" addBox={addBox} />
      <div className="BoxList-Boxes">
        {boxes.map(box => {
          return (
            <Box
              className="BoxList-Box"
              color={box.color}
              width={box.width}
              height={box.height}
              handleRemove={handleRemove}
              id={box.id}
              key={box.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BoxList;
