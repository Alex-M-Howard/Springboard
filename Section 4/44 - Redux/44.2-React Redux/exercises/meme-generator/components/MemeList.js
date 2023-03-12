import React from "react";
import Meme from "./Meme";
import { useSelector } from "react-redux";
import uuid4 from "uuid4";

function MemeList() {

  const memes = useSelector(store => store.memes);

  console.log(memes)

  const memeList = () => {
    return memes.map(meme => {
      return <Meme 
        key={uuid4()}
        imageUrl={meme.imageUrl}
        topText={meme.topText}
        bottomText={meme.bottomText}
      />
    })
  }

  return (
    <>
      {memeList()}
    </>
  )
}

export default MemeList;
