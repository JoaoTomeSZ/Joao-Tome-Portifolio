import React from "react";
import "./About.css";
import Reactimage from "/React.png";
import Js from "/js.png";

const About = () => {
  return (
    <section className="relative about-shadow bg-gray-900 h-[calc(100vh-100px)] max-w-[100%] w-full flex items-center justify-center flex-col pt-10 gap-5">
      <div className="flex flex-auto items-center justify-around w-full w-max-[100%] p-5">
        <h2 className="text-amber-200 text-4xl max-w-[50%]">
          I'm João Tomé a 21-year-old frontend developer passionate about
          building fast, beautiful, and functional interfaces. With experience
          in HTML, CSS, JavaScript, and React, my focus is on turning ideas into
          amazing user experiences. Always looking for new challenges and
          creative solutions. Let’s build something together!
        </h2>
        <img src={Js} alt="JavaScript image" className="max-w-2xl" />
      </div>
    </section>
  );
};

export default About;
