import React from 'react';
import './Box.css'

const Box = ({id, color='blue', width='200', height='200', handleRemove}) => {
  const remove = () => handleRemove(id);

    return (
      <div className="Box">
        <div
          className="Box-Color"
          data-testid="box-element"
          style={{
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`,
          }}
          
        ></div>
        <button className="Box-Remove " onClick={remove}>X</button>
      </div>
    );
}

export default Box;