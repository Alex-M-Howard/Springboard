import React, { useState } from "react";
import { TextField } from "@mui/material";
import useFields from "@/hooks/useFields"

const ColorPicker = ({ handleChange, color }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChangeComplete = (newColor) => {
    handleChange({ target: { name: "color", value: newColor.hex } });
    setDisplayColorPicker(false);
  };

  return (
    <div>
      <input
        type="text"
        value={color}
        onClick={handleClick}
        readOnly
      />
      {displayColorPicker ? (
        <div style={{ position: "absolute" }}>
          <div
            style={{
              background: "rgba(0,0,0,0.2)",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={handleClose}
          />
          <SketchPicker
            color={color}
            onChangeComplete={handleChangeComplete}
          />
        </div>
      ) : null}
    </div>
  );
};

function ColorForm() {

  const [formData, handleChange] = useFields({
    name: "",
    color: "#000"
  })

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
  }

  return (
    <div style={{ backgroundColor: formData.color, height: '100vh'}}>
      <div style={{backgroundColor: 'white', height: '150px'}}>
        <form>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Color"
            variant="outlined"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />

          <button>Add Color</button>
        </form>
      </div>
    </div>
  );
}

export default ColorForm;
