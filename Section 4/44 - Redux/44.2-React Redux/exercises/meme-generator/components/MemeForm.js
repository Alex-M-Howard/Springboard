import React, { useState } from "react";
import { useDispatch } from "react-redux";

function MemeForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
    const memeData = { imageUrl, topText, bottomText }
    dispatch({type: "ADD", payload: memeData })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
      />

      <label htmlFor="topText">Top Text:</label>
      <input
        type="text"
        id="topText"
        value={topText}
        onChange={(event) => setTopText(event.target.value)}
      />

      <label htmlFor="bottomText">Bottom Text:</label>
      <input
        type="text"
        id="bottomText"
        value={bottomText}
        onChange={(event) => setBottomText(event.target.value)}
      />

      <button type="submit">Create Meme</button>
    </form>
  );
}

export default MemeForm;
