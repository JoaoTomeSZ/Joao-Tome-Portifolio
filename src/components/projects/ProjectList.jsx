import tomeBurguer from "/burguer.png"
import simonGame from "/simon.png"
import perfume from "/perfume.png"
import weather from "/weather.png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { RiTailwindCssFill  } from "react-icons/ri";
import { MdJavascript, MdCss, MdHtml } from "react-icons/md";

const ProjectList = () => {

    const projectsList = [tomeBurguer, simonGame, perfume, weather]
    const projectsNames= ["Tomé Burguer", "Simon Game", "Product-Review", "WeatherNow!"]
    const techStack = [[<MdHtml size={25}/>, <RiTailwindCssFill size={25}/>, <MdJavascript size={25}/>], [<MdHtml size={25}/>, <MdCss size={25}/>, <MdJavascript size={25}/>],
     [<MdHtml size={25}/>, <MdCss size={25}/>], [<MdHtml size={25}/>, <MdCss size={25}/>, <MdJavascript size={25}/>]]
    

  return (
    <section className=' max-w-full flex justify-around items-center text-left'>
        <div className="flex max-w-full">
                <ul className="flex flex-col gap-10 max-w-full lg:p-0 p-4">
                    {projectsList.map((list, index) => (
                        <li key={index} className="flex max-w-full w-150 p-5 items-start justify-start gap-5  rounded-md projectHover shadow-2xl shadow-[#001F3F]">
                            <a href="">
                                <img src={list} className="w-[100px] sm:w-[150px] md:w-[200px] rounded-sm border-2" />
                            </a>
                            <div className="flex flex-col text-white">
                                <a href=""><h2 className=" text-xl text-black">{projectsNames[index]} <ArrowOutwardIcon/></h2></a>
                                <p className="text-[#D3D3D3]"> JOAO</p>
                                <div className="flex flex-wrap gap-2 mt-2">
          {techStack[index].map((tech, i) => (
            <span key={i} className="bg-[#1E1E1E] text-white text-sm px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
                            </div>
                        </li>
                    ))}
                </ul>
        </div>
    </section>
  )
}

export default ProjectList