import React, { useRef, useState } from "react";
import audioFile from "../audio/vite-tailwindcss-sound.mp3";
import rainBackground from "../img/vite-tailwindcss-rain-background.jpg";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const Main = () => {
  const audioRef = useRef(null);
  const playButtonRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (event) => {
    const audio = audioRef.current;
    audio.volume = event.target.value;
  };

  return (
    <div
      className="bg-cover bg-center h-screen w-screen capitalize"
      style={{ backgroundImage: `url(${rainBackground})` }}
    >
      <div className="grid content-center justify-center h-screen w-screen font-serif text-center">
        {/* Audio file */}
        <audio ref={audioRef} id="song" className="hidden">
          <source src={audioFile} type="audio/mpeg" />
          <source src={audioFile} type="audio/mp3" />
          <source src={audioFile} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>

        <div className="controls flex items-center justify-center transition-all">
          <div
            id="playButton"
            ref={playButtonRef}
            style={{ display: isPlaying ? "none" : "block" }}
          >
            <AiOutlinePlayCircle
              size={150}
              onClick={playPause}
              className="text-white m-8 cursor-pointer"
            />
          </div>
          <div
            id="pauseButton"
            ref={pauseButtonRef}
            style={{ display: isPlaying ? "block" : "none" }}
          >
            <AiOutlinePauseCircle
              size={150}
              onClick={playPause}
              className="text-white m-8 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <input
            type="range"
            className="w-auto"
            min="0"
            max="1"
            step="0.01"
            defaultValue="1"
            onChange={handleVolumeChange}
          />
        </div>

        <h1 className="text-white text-8xl m-4">Rainy Mood.</h1>
        <p className="text-white text-2xl m-2">rain sounds for sleep & study</p>
        <p className="text-white text-2xl m-2">
          Soon available on Spotify and Apple Music
        </p>
      </div>
    </div>
  );
};

export default Main;
