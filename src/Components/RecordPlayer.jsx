import React from "react";
import "./recordPlayer.css";

const RecordPlayer = (props) => {
  const playHandler = () => {
    if (!props.isPlaying) {
      props.setIsplaying(true);
      setTimeout(function () {
        props.audioRef.current.play();
      }, 1500);
    } else if (props.isPlaying) {
      props.setIsplaying(false);
      props.audioRef.current.pause();
    }
  };

  const volumeHandler = (e) => {
    props.audioRef.current.volume = e.target.value / 100;
  };

  const playbackHandler = (e) => {
    props.audioRef.current.playbackRate = e.target.value / 40;
    console.log(e.target.value / 40);
  };

  return (
    <div className="recordDeck">
      <div
        className={!props.isPlaying ? "notPlayingLight" : "greenLight"}
      ></div>
      <div className={props.isPlaying ? "playingLight" : "redLight"}></div>
      <div className="signature">
        <h2>cpw</h2>
      </div>

      <div className={!props.isPlaying ? "record" : "record playing"}>
        <div className="recordCenter"></div>
      </div>
      <div className="recordControls">
        <div className="armBase" onClick={playHandler}>
          <div className={!props.isPlaying ? "arm" : "arm play"}>
            <div className="needleHead"></div>
          </div>
        </div>

        <div className="sliders">
          <input
            type="range"
            name="Controller"
            id="Controller"
            min="25"
            max="80"
            onChange={playbackHandler}
          />
          <input
            type="range"
            name="volumeController"
            id="volumeController"
            onChange={volumeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default RecordPlayer;
