import React from 'react'
import Carousel from './Carousel'
import "./Projects.css"
import ProjectsImages from './ProjectsImages'


const Projects = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center bg-[#001F3F]'>
      <div className='max-w-full max-h-full h-full my-auto mx-auto flex flex-col justify-between'>
      <h1 className='text-white md:text-8xl text-4xl font-bold'>MY PROJECTS</h1>
        <ProjectsImages/>
        <Carousel/>
      </div>
      
    </div>
  )
}

export default Projects