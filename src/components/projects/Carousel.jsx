import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import tomeBurguer from "/burguer.png";
import simon from "/simon.png";
import imperioBarber from "/imperioBarber.png";
import perfume from "/perfume.png";
import weather from "/weather.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import PanoramaIcon from '@mui/icons-material/Panorama';


const Carousel = () => {
  const images = [tomeBurguer, simon, imperioBarber, perfume, weather];
  const imagesALT = [
    "Tomé Burguer",
    "Simon Game",
    "Imperio Barber Shop",
    "Parfum card",
    "Weather info",
  ];
  const repoLinks = [
    "https://github.com/JoaoTomeSZ/TomeBurguer",
    "https://github.com/JoaoTomeSZ/WeatherNow",
  ];
  const projectLinks = [
    "https://joaotomesz.github.io/TomeBurguer/",
    "https://joaotomesz.github.io/Simon-game/",
    "https://joaotomesz.github.io/Imperio-Barber-Shop/",
    "https://joaotomesz.github.io/Product-Review/",
    "https://joaotomesz.github.io/WeatherNow/",
  ];
  const projectNames = [
    "Tomé Burguer",
    "Simon Game",
    "Império Barber Shop",
    "Product Review",
    "Weather Now!",
  ];
  return (
    <div className="w-full h-full min-h-screen mx-auto sm:hidden block p-5 ">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        className="rounded-2xl shadow-2xl w-full flex justify-center items-center"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className=" flex flex-col justify-between text-center items-center"
          >
            <div className="flex flex-col gap-2">
              <img
                className="w-full h-full  object-cover rounded-2xl"
                src={image}
                alt={imagesALT[index]}
              />
              <h1 className="text-3xl text-white">{projectNames[index]}</h1>
              <div className="w-full  bg-black  text-white p-10 gap-10 flex items-center justify-around rounded-2xl">
                    <a
                        href={repoLinks[index]}
                        rel="noopener noreferrer"
                        target="blank"
                        className="md:py-4 md:px-10 md:text-2xl py-4 px-5 font-bold bg-white text-[#4682B4] rounded-sm"
                    >
                        Go to repo
                        <GitHubIcon/>
                    </a>
                    <a
                        href={projectLinks[index]}
                        rel="noopener noreferrer"
                        target="blank"
                        className="md:py-4 md:px-10 md:text-2xl py-4 px-5 font-bold bg-white text-[#4682B4] rounded-sm"
                    >
                        Go to Project
                        <PanoramaIcon/>
                    </a>
                </div>
            </div>

                
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
