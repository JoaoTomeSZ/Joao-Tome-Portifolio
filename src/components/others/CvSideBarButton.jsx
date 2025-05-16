import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import CV from "/JoaoTomeCV.pdf"

const CvSideBarButton = () => {
  return (
    <div>
      <button className="block lg:hidden bg-black jumping-text text-white p-1 md:py-2 md:px-3 rounded-2xl border-r-2 border-b-2  transition-transform duration-300 hover:scale-102 cursor-pointer">
        <a href={CV} download>
          Download CV <DownloadIcon />
        </a>
      </button>
    </div>
  );
};

export default CvSideBarButton;
