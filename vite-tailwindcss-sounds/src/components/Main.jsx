import React, { useRef, useState } from "react";
import audioFile from "../audio/vite-tailwindcss-sound.mp3";
import rainBackground from "../video/vite-tailwindcss-video.mp4";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

const Main = () => {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoSpeed, setVideoSpeed] = useState(0.5);

  const playPause = () => {
    const audio = audioRef.current;
    const video = videoRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
      video.playbackRate = 1; // Reset video speed to normal when playing
    } else {
      audio.pause();
      setIsPlaying(false);
      video.playbackRate = 0.5; // Set video speed to 0.5x when paused
    }
  };

  const handleVolumeChange = (event) => {
    const audio = audioRef.current;
    audio.volume = event.currentTarget.value;
  };

  return (
    <div className="relative h-screen w-screen">
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover bg-fixed -z-50"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline // Added playsInline attribute
        playbackRate={videoSpeed}
        preload="metadata"
      >
        <source src={rainBackground} type="video/mp4" />
        <source src={rainBackground} type="video/webm" />
        Your browser does not support the video element.
      </video>

      <div className="grid justify-center items-center h-screen font-serif">
        <div className="flex flex-col items-center justify-cente space-y-2 space-y-reverse rounded-3xl h-fit w-fit bg-[#fffff33] backdrop-blur-xl shadow-2xl drop-shadow-xl">
          <audio loop ref={audioRef} id="song" className="hidden" playsInline> // Added playsInline attribute
            <source src={audioFile} type="audio/mpeg" />
            <source src={audioFile} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>

          <div className="controls flex items-center justify-center p-8">
            <div
              id="playButton"
              ref={playButtonRef}
              style={{ display: isPlaying ? "none" : "block" }}
            >
              <AiOutlinePlayCircle
                size={150}
                onMouseDown={playPause} // Added onMouseDown event
                // onTouchStart={playPause} // Added onTouchStart event
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
                onMouseDown={playPause} // Added onMouseDown event
                // onTouchStart={playPause} // Added onTouchStart event
                className="text-white cursor-pointer hover:animate-pulse"
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

          <h1 className="text-white text-4xl text-center drop-shadow-md p-8 md:text-6xl">Rainy Mood</h1>
          <p className="text-white text-lg text-center p-2 drop-shadow-md capitalize">rain sounds for sleep & study</p>
          
          <p className="text-white text-sm text-center drop-shadow-md sm:text-md p-6">Soon available on&nbsp;
          <span className="hover:underline cursor-pointer">Spotify</span>&nbsp;and&nbsp;
          <span className="hover:underline cursor-pointer">Apple Store</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
