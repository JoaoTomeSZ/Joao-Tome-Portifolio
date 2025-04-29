import React from "react";
import TypingAnimation from "./TypingEfect";
import Icons from "./Icons";
import "./Hero.css"
const Hero = () => {
  

  return (
    <div className="w-[100vw] h-[calc(100vh-100px)] flex items-center justify-center z-[-1] relative">
      <div
        id="hero-elements-container"
        className="flex flex-col lg:flex- lg:flex-row items-center justify-center max-w-[100%] w-full max-h-[25rem] p-y-5 gap-5 bg-black shadow-2xl "
      >
        <img
          className="max-h-[12rem] max-w-[12rem] relative z-0  w-full lg:max-w-[500px] lg:w-full lg:max-h-[500px] rounded-full object-cover shadow-2xl fade-in"
          src={"/JoaoCharacter.jpeg"}
        ></img>

        <div className="w-full lg:w-[55%] flex flex-col justify-around items-center text-center">
          <TypingAnimation />
          <h2 className="text-2xl text-white border-black p-1.5 rounded-xl">
            I'm the Dev you're searching for!
          </h2>
          <Icons/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
