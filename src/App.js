import React, { useState, useRef } from "react";
import "./App.css";
import RecordBrowser from "./Components/RecordBrowser";
import RecordPlayer from "./Components/RecordPlayer";

function App(props) {
  const [isPlaying, setIsplaying] = useState(false);

  const audioRef = [
    {
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      song: useRef(new Audio("https://mp3.chillhop.com/serve.php/?mp3=9272")),
    },
  ];

  return (
    <div className="wrapper">
      <RecordPlayer
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        audioRef={audioRef[0].song}
      />
      <RecordBrowser
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        audioRef={audioRef}
      />
    </div>
  );
}

export default App;
