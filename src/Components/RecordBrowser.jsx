import React from "react";
import RecordAlbum from "./RecordAlbum";
import albumCoverOne from "../images/albumcov.jpeg";
import fleetwoodmacCover from "../images/albumcov2.jpeg";
import herbyCover from "../images/albumcov3.jpg";
import beatlesCover from "../images/albumcov4.jpeg";
import pinkFloydCover from "../images/albumcov5.jpg";

import "./recordBrowser.css";

const RecordBrowser = (props) => {
  return (
    <div className="recordStack">
      <RecordAlbum
        style={{
          backgroundImage: `url(${albumCoverOne})`,
          backgroundPosition: "top",
          top: "0%",
        }}
        isPlaying={props.isPlaying}
        setIsplaying={props.setIsplaying}
        audioRef={props.audioRef}
      />
      <RecordAlbum
        style={{
          backgroundImage: `url(${fleetwoodmacCover})`,
          backgroundPosition: "top",
          top: "20%",
        }}
        isPlaying={props.isPlaying}
        setIsplaying={props.setIsplaying}
        audioRef={props.audioRef}
      />
      <RecordAlbum
        style={{
          backgroundImage: `url(${herbyCover})`,
          backgroundPosition: "top",
          top: "40%",
        }}
        isPlaying={props.isPlaying}
        setIsplaying={props.setIsplaying}
        audioRef={props.audioRef}
      />
      <RecordAlbum
        style={{
          backgroundImage: `url(${beatlesCover})`,
          backgroundPosition: "top",
          top: "60%",
        }}
        isPlaying={props.isPlaying}
        setIsplaying={props.setIsplaying}
        audioRef={props.audioRef}
      />
      <RecordAlbum
        style={{
          backgroundImage: `url(${pinkFloydCover})`,
          backgroundPosition: "top",
          top: "80%",
        }}
        isPlaying={props.isPlaying}
        setIsplaying={props.setIsplaying}
        audioRef={props.audioRef}
      />
    </div>
  );
};

export default RecordBrowser;
