import React from "react";
import TypingAnimation from "./TypingEfect";
import Icons from "./Icons";
import "./Hero.css";
import CvButton from "../others/CvButton";
const Hero = () => {
  return (
    <div>
    <main
      id="hero-id"
      className="w-full h-[calc(100vh-100px)] flex items-center justify-center z-50 static overflow-hidden m-0 p-0 "
    >
      <div
        id="hero-elements-container"
        className="flex flex-col lg:flex-row items-center justify-center max-w-[100%] lg:max-w-[1400px] w-full max-h-[100%] gap-5 "
      >
        <img
          className=" w-[250px] h-[250px] max-w-[300px] max-h-[300px] lg:w-full lg:h-full rounded-full object-cover shadow-2xl fade-in"
          src={"/JoaoCharacter.jpeg"}
        ></img>

        <div className="max-w-[100%] flex flex-col justify-around text-center lg:items-left lg:text-left overflow-hidden m-0 p-0">
          <TypingAnimation />
          <h2 className="text-4xl font-size-md lg:text-8xl  text-black border-black  ">
            DESIGNING PRODUCTS AND <span className="text-gray-400 ">BRINGING YOUR DREAMS TO LIFE!</span> 
          </h2>
          <CvButton/>
        </div>
        <Icons />
      </div>
    </main>
    </div>
  );
};

export default Hero;
