import React from 'react';
import './Box.css'

const Box = ({color='blue', width='200', height='200'}) => {
    return (
        <div 
          className="Box"
          style={{
            backgroundColor:color,
            width: `${width}px`,
            height: `${height}px`
          }}
        >
        </div>
    )
}

export default Box;