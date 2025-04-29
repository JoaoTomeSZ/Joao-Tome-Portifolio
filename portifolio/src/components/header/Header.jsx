import CodeIcon from "@mui/icons-material/Code";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SideBar from "./SideBar";
import { AnimatePresence } from 'framer-motion';
import "./Header.css"

const Header = () => {
  const [open, setOpen] = useState(false);

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
    <div
      id="header-container"
      className="flex flex-wrap flex-auto justify-center max-w-[100%] sticky top-0 p-5 bg-black lg:justify-around shadow-2xl"
    >
      <div
        id="nav-container"
        className="flex flex-auto items-center lg:justify-between justify-between max-w-[75%] lg:max-w-[1024px] rounded-3xl text-[#6EE7B7]"
      >
        <h1 className="lg:text-6xl font-bold text-2xl">
          JT 
          <span>
            <CodeIcon />
          </span>
        </h1>
        <ul className="hidden  gap-10 lg:block lg:flex">
          {navbarList.map((list, index) => (
            <li
              className="list-none cursor-pointer relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-[#6EE7B7] after:transition-all after:duration-300 hover:after:w-full"
              key={index}
            >
              <a>{list}</a>
            </li>
          ))}
        </ul>
        <button className="hidden lg:block lg:flex bg-white jumping-text text-black py-2 px-3 text- border-r-2 border-b-2 border-[#6EE7B7] transition-transform duration-300 hover:scale-102 cursor-pointer">
          <a   href="/JoaoTomeCV.pdf" download>Download CV</a> 
        </button>
        <button
          className="lg:hidden block p-1"
          id="hamburguer-open-button"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </div>
      <AnimatePresence>
      {open && <SideBar close={onCLose} className="z-10"/>}
      </AnimatePresence>
      
    </div>
  );
};

export default Header;
