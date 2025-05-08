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


const TecIcons = () => {

    const icons = [html, css, javascript, tailwind, react, node, express, postgres, mysql, git]
    const names = ["HTML5", "CSS", "JavaScript", "TailwindCSS", "ReactJS", "NodeJS", "ExpressJS", "Postgres", "MySQL", "Git"]


  return (
    <div className='flex justify-center items-center h-screen'>
        <ul className='grid grid-cols-2 sm:grid-cols-5 sm:grid-rows-2 gap-10 '>
            {icons.map((icons, index) => (
                <li key={index} className='shadow-2xl shadow-black icons-hover bg-black/80 backdrop-blur-3xl rounded-xl border-white/30 p-5 max-w-full max-h-full border-b text-center gap-2 flex flex-col justify-center items-center text-white'>
                    <img src={icons} alt="" className='w-[50px] h-[50px] sm:w-[150px] sm:h-[150px] object-contain icons-hover'/>
                    <p className='lg:text-2xl text-sm object-contain'>{names[index]}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TecIcons