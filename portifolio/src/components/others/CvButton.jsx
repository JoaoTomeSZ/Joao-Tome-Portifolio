import React from "react";
import DownloadIcon from '@mui/icons-material/Download';

const CvButton = () => {
  return (
    <div>
      <button className="hidden lg:block lg:flex bg-black jumping-text text-white py-2 px-3 rounded-2xl border-r-2 border-b-2 border-black  transition-transform duration-300 hover:scale-102 cursor-pointer">
        <a href="/JoaoTomeCV.pdf" download>
          Download CV <DownloadIcon/>
        </a>
      </button>
    </div>
  );
};

export default CvButton;
