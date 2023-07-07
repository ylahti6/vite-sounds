import React, { useRef, useState } from "react";
import audioFile from "../audio/vite-tailwindcss-sound.mp3";
import rainBackground from "../img/vite-tailwindcss-rain-background.jpg";
import { AiOutlinePlayCircle, AiOutlinePauseCircle, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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
      <div className="grid justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center rounded-3xl h-fit w-fit p-4 font-serif bg-[#fffff33] backdrop-blur-md shadow-2xl drop-shadow-lg">
        {/* Audio file */}
        <audio loop ref={audioRef} id="song" className="hidden">
          <source src={audioFile} type="audio/mpeg" />
          <source src={audioFile} type="audio/mp3" />
          <source src={audioFile} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>

        <div className="controls flex items-center justify-center m-8">
          <div
            id="playButton"
            ref={playButtonRef}
            style={{ display: isPlaying ? "none" : "block" }}
            
          >
            <AiOutlinePlayCircle
              size={150}
              onClick={playPause}
              className="text-white cursor-pointer hover:animate-pulse"
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
              className="text-white  cursor-pointer hover:animate-pulse"
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
            defaultValue="0.5"
            onChange={handleVolumeChange}
          />
        </div>

        <h1 className="text-white text-4xl m-8 drop-shadow-md">Rainy Mood.</h1>

        <div className="flex">
          <AiFillGithub size={50} className="text-white m-2"/>
          <AiFillLinkedin size={50} className="text-white m-2"/>
        </div>
        
        <p className="text-white text-xl m-4 drop-shadow-md">rain sounds for sleep & study</p>
        <p className="text-white text-sm m-4 drop-shadow-md">Soon available on <span className="hover:underline cursor-pointer">Spotify</span> and <span className="hover:underline cursor-pointer">Apple Music</span>*</p>
       </div>
      </div>
      </div>
    
  );
};

export default Main;
