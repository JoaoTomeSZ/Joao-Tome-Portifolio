import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import {Link } from "react-router-dom"
import CvSideBarButton from "../others/CvSideBarButton";


const SideBar = ({ close }) => {
  const links = ["/About", "/Tecnologies", "/Projects", "/Mailme", "/Contacts", ]

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
      className="lg:hidden fixed top-0 right-0 h-full w-[50%] lg:w-[128px] bg-neutral-50 shadow-xl flex flex-col z-60"
    >
      <div className="p-5 flex flex-col justify-between max-h-[50%] h-full items-start text-black text-[1rem] md:text-2xl">
        <button onClick={close} className="cursor-pointer">
          <CloseIcon />
        </button>
        <ul className="flex gap-3.5 flex-col md:gap-6">
          {navbarList.map((list, index) => (
            <li key={index} className="cursor-pointer">
              <Link to={links[index]}>{list}</Link>
            </li>
          ))}
        </ul>
        <CvSideBarButton/>
      </div>
    </motion.div>
  );
};

export default SideBar;
