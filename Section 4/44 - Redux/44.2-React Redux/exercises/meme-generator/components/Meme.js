import React from "react";

function Meme({ imageUrl, topText, bottomText }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={imageUrl}
        alt="Meme"
        style={{ display: "block", width: "100%" }}
      />
      <p
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          margin: "0.5em",
          color: "white",
          textShadow: "1px 1px black",
          textAlign: "center",
        }}>
        {topText}
      </p>
      <p
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          margin: "0.5em",
          color: "white",
          textShadow: "1px 1px black",
          textAlign: "center",
        }}>
        {bottomText}
      </p>
    </div>
  );
}

export default Meme;
