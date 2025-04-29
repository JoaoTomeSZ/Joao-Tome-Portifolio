import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const SideBar = ({ close }) => {
  const navbarList = [
    "About me",
    "Tecnologies",
    "Projects",
    "Mail me",
    "Contacts",
  ];
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="lg:hidden fixed top-0 right-0 h-full w-[50%] lg:w-[128px] bg-gray-800 shadow-xl flex flex-col z-[100]"
    >
      <div className="p-5 flex flex-col justify-between max-h-[50%] h-full items-start text-white text-[1rem] md:text-2xl">
        <button onClick={close} className="cursor-pointer">
          <CloseIcon />
        </button>
        <ul className="flex gap-3.5 flex-col md:gap-6">
          {navbarList.map((list, index) => (
            <li key={index} className="cursor-pointer">
              <a>{list}</a>
            </li>
          ))}
        </ul>
        <button className=" bg-gray-300 py-2 px-3 border-r-2 border-b-2 transition-transform duration-300 hover:scale-102 cursor-pointer text-black">
          <a  href="/JoaoTomeCV.pdf" download>Download CV</a>
        </button>
      </div>
    </motion.div>
  );
};

export default SideBar;
