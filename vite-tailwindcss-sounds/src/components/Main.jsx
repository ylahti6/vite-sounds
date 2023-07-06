import React from "react";
import rainBackground from "../img/vite-tailwindcss-rain-background.jpg";

const Main = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-screen"
      style={{ backgroundImage: `url(${rainBackground})` }}>
       
       <h1 className="text-white font-serif text-6xl grid place-items-center h-screen">Rainy Mood.</h1>
       </div>
  );
};

export default Main;
