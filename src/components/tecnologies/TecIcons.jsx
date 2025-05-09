import React from 'react'
import javascript from "/javascript.png"
import express from "/express.png"
import node from "/node.png"
import react from "/react.png"
import postgres from "/postgres.png"
import css from "/css.png"
import tailwind from "/tailwind.png"
import html from "/html.png"
import git from "/git.png"
import mysql from "/mysql.png"
import { useEffect, useRef, useState } from 'react';


const TecIcons = () => {

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

    const icons = [html, css, javascript, tailwind, react, node, express, postgres, mysql, git]
    const names = ["HTML5", "CSS", "JavaScript", "TailwindCSS", "ReactJS", "NodeJS", "ExpressJS", "Postgres", "MySQL", "Git"]


  return (
    <div ref={ref} className={`transition-opacity duration-2000 ease-in-out  ${
        isVisible ? `opacity-100 translate-y-0 pop-animate`: 'opacity-0 translate-y-10'
      }  flex justify-center items-center min-h-screen min-w-screen`}>
        <ul className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 md:grid-rows-2 gap-10 '>
            {icons.map((icons, index) => (
                <li className='shadow-xl shadow-black icons-hover bg-black/80 backdrop-blur-3xl rounded-xl border-white/30 p-5 max-w-full max-h-full border-b text-center gap-2 flex flex-col justify-center items-center text-white' key={index} >
                    <img src={icons} alt={names[index]} className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] object-contain icons-hover'/>
                    <p className='lg:text-2xl  text-sm object-contain'>{names[index]}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default TecIcons