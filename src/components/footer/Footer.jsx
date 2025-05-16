import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CiMail } from "react-icons/ci";
import InstagramIcon from '@mui/icons-material/Instagram';
const Contacts = () => {


  return (
    <div className='h-[200px] m-auto max-w-full w-full flex justify-center '>
        <div className='max-w-full w-full flex-col md:flex md:flex-row justify-center items-center '>
          <div className="flex flex-col gap-5 border-r-2 px-2 py-4 items-center justify-center text-center">
            <a href="https://github.com/JoaoTomeSZ" className="flex gap-2">Github<GitHubIcon color="secondary"></GitHubIcon></a>
            <a href="https://www.linkedin.com/in/joaotomesz" className="flex gap-2">Linkedin<LinkedInIcon color="primary"></LinkedInIcon></a>
            <a href="https://www.instagram.com/_joaotm/" className="flex gap-2">Instagram <InstagramIcon color="secondary"/></a>
          </div>
          <div className="flex flex-col p-2 items-center">
            <a href="mailto:joaocarlosprogrammer@gmail.com?subject=Portifolio%20Email%20Contact&body=Hi,%20i%20would%20like%20to%20talk%20to%20you!" className="flex items-center"><CiMail/> joaocarlosprogrammer@gmail.com</a>        
          </div>
            
        </div>
    </div>
  )
}

export default Contacts