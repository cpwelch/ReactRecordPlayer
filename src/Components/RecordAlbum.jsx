import React, { useState } from "react";

import "./recordAlbum.css";

const RecordAlbum = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const hoverHandler = () => {
    setIsHovering((h) => !h);
  };

  const hoverLeaveHandler = () => {
    setIsHovering(false);
  };

  const selectHandler = () => {
    setIsSelected((s) => !s);
    console.log("clicked");
  };

  const playHandler = (e) => {
    e.stopPropagation();
    if (!props.isPlaying) {
      props.setIsplaying(true);
      setIsHovering(false);
      setTimeout(function () {
        props.audioRef[0].song.current.play();
      }, 1500);
    } else if (props.isPlaying) {
      props.setIsplaying(false);
      props.audioRef[0].song.current.pause();
    }
  };

  return (
    <div
      className={`${!isHovering ? "album" : "album slide"} ${
        isSelected ? "albumSelected slide" : ""
      }`}
      style={props.style}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverLeaveHandler}
      onClick={selectHandler}
    >
      {isSelected && (
        <div
          className={props.isPlaying ? "pause-button" : "play-button"}
          onClick={playHandler}
        ></div>
      )}
    </div>
  );
};

export default RecordAlbum;
