import React from "react";
import rainBackground from "../img/vite-tailwindcss-rain-background.jpg";
import audioFile from "../audio/vite-tailwindcss-sound.mp3"
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';

const Main = () => {

  const song = document.getElementById("song");
  const playButton = document.getElementById("playButton");
  const PauseButton = document.getElementById("pauseButton");

  function playPause(){
    if (song.paused) {
      song.play();
      playButton.style.display = "none";
      pauseButton.style.display = "block";
    } else {
      song.pause();
      playButton.style.display = "block";
      pauseButton.style.display = "none";
    }
  }

  return (
    <div className="bg-cover bg-center h-screen w-screen" style={{ backgroundImage: `url(${rainBackground})` }}>
      <div className="grid content-center justify-center h-screen w-screen font-serif text-center">

        {/* Audio file */}
        <audio controls id="song" className="hidden">
          <source src={audioFile} type="audio/mpeg" />
          <source src={audioFile} type="audio/mp3" />
          <source src={audioFile} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>

        <div className="controls flex items-center justify-center">
          <div id="playButton">
            <AiOutlinePlayCircle size={150} onClick={playPause} className="text-white m-8 cursor-pointer" />
          </div>
          <div id="pauseButton" style={{ display: "none" }}>
            <AiOutlinePauseCircle size={150} onClick={playPause} className="text-white m-8 cursor-pointer" />
          </div>
        </div>

        <h1 className="text-white text-8xl m-4">Rainy Mood.</h1>
        <p className="text-white text-2xl m-2">rain sounds for sleep & study</p>
        <p className="text-white text-2xl m-2">Soon available on Spotify and Apple Music</p>
      </div>
    </div>
  );
};

export default Main;
