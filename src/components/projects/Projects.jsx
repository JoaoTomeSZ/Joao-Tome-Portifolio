import ProjectList from "./ProjectList"
import "./Projects.css"



const Projects = () => {
  return (
    <div className='min-h-screen max-w-full flex md:flex-row flex-col justify-center items-center bg-white text-black'>
      <div className="text-black flex lg:flex-row flex-col md:text-left text-center justify-around items-center max-w-full m-auto w-full pt-20">
        <h1 className=" lg:text-9xl md:text-5xl text-3xl md:max-w-[600px] border-l-2 lg:border-l-10">MEET MY PROJECTS</h1>
        <ProjectList/>
      </div>
    </div>
  )
}

export default Projects