import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SideBar from "./SideBar";
import { AnimatePresence } from 'framer-motion';
import "./Header.css"
import { Link } from "react-router-dom";
import CvButton from "../others/CvButton";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = ["/About", "/Tecnologies", "/Projects", "/Mailme", "/Contacts", ]

  const onCLose = () => {
    setOpen(false)
    
  }

  const navbarList = [
    "About me",
    "Tecnologies",
    "Projects",
    "Mail me",
    "Contacts",
  ];

  
  return (
    <div className="sticky top-0 z-50 ">
      <AnimatePresence>
      {open && <SideBar close={onCLose} />}
      </AnimatePresence>
    
    <div
      id="header-container"
      className="sticky top-0 flex flex-auto justify-center max-h-xs max-w-full p-5 bg-white  text-black lg:justify-around shadow-md z-50"
    >
      <nav
        id="nav-container"
        className="flex flex-auto items-center lg:justify-between justify-between max-w-[75%] lg:max-w-[1024px] rounded-3xl "
      >
        <h1 className="lg:text-6xl font-bold text-2xl">
          <Link to={"https://joaotomesz.github.io/Joao-Tome-Portifolio/"}>
          JT 
          <span>
            <CodeIcon />
          </span>
          </Link>
          
        </h1>
        <ul className="hidden  gap-10 lg:block lg:flex">
          {navbarList.map((list, index) => (
            <li
              className="list-none cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              key={index}
            >
              <Link to={links[index]}>{list}</Link>
            </li>
          ))}
        </ul>
        <CvButton/>
        <button
          className="lg:hidden block p-1 cursor-pointer"
          id="hamburguer-open-button"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </nav>
      
      
    </div>
    </div>
  );
};

export default Header;
