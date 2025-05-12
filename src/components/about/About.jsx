import React from "react";
import "./About.css";
import bgImg from "/codingAbout.png";
import { useEffect, useRef, useState } from 'react';
import AppearingText from "./AppearingText";
import CardBoxes from "./CardBoxes";

const About = () => {
  
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.1 } 
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);


  return (
    <div  className="bg-[#001F3F] min-h-screen max-w-full w-full flex lg:items-center justify-around text-center flex-col pb-6">
      <div className="flex justify-around items-center min-h-[500px] lg:max-w-[80%] max-h-full flex-col sm:flex-row w-full lg:text-left text-center lg:p-0 p-2 gap-5">
        <AppearingText />
        <img
          src={bgImg}
          loading="lazy"
          className="md:w-[350px] md:h-[350px] sm:w-[250px] sm:h-[250px] w-[200px] bg-white rounded-full  shadow-black "
          alt="Programming Class"
        />
      </div>
      <div className="flex lg:flex-row flex-col w-full lg:max-w-[80%] p-5 max-h-full flex-wrap justify-around items-center background">
        <CardBoxes/>
        <p ref={ref} className={`max-w-full w-auto flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0 floating-text' : 'opacity-0 translate-y-[-10px]'
      } text-2xl sm:text-3xl text-white text-shadow-xs text-shadow-blue-300 flex-col floating-text`}>+30 Projects
          <p className="text-[#4682B4]">Front-End</p>
          <p>Back-End</p>
        </p>
      </div>     
    </div>
  );
};

export default About;
