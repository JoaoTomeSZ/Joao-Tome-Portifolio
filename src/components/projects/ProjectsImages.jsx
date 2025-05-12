import React from 'react'
import tomeBurguer from "/burguer.png";
import simon from "/simon.png"
import imperioBarber from "/imperioBarber.png";
import perfume from "/perfume.png";
import weather from "/weather.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import GitHubIcon from "@mui/icons-material/GitHub";
import PanoramaIcon from '@mui/icons-material/Panorama';

const ProjectsImages = () => {
    const images = [tomeBurguer, simon, imperioBarber, perfume, weather]
    const imagesALT = ["Tomé Burguer", "Simon Game", "Imperio Barber Shop", "Parfum card", "Weather info"]
    const repoLinks = ["https://github.com/JoaoTomeSZ/TomeBurguer", "https://github.com/JoaoTomeSZ/Simon-game", "https://github.com/JoaoTomeSZ/Imperio-Barber-Shop", "https://github.com/JoaoTomeSZ/Product-Review", "https://github.com/JoaoTomeSZ/WeatherNow"]
    const projectLinks = ["https://joaotomesz.github.io/TomeBurguer/", "https://joaotomesz.github.io/Simon-game/", "https://joaotomesz.github.io/Imperio-Barber-Shop/", "https://joaotomesz.github.io/Product-Review/", "https://joaotomesz.github.io/WeatherNow/"]
    const projectNames = ["Tomé Burguer", "Simon Game", "Império Barber Shop", "Product Review", "Weather Now!"]
  return (
    <div className='w-full max-w-6xl max-h-[800px] h-full my-auto mx-auto sm:block hidden p-5 '>
            <Swiper modules={[Navigation]} navigation loop className='rounded-2xl shadow-2xl w-full flex justify-center items-center'>
                {images.map((image, index) => (
                    <SwiperSlide key={index} className='flex justify-center text-center items-center'>
                        <div className='flex flex-col'>
                            <img className='w-full h-full object-cover rounded-2xl' src={image} alt={imagesALT[index]} />
                            <h1 className='text-white text-5xl'>{projectNames[index]}</h1>
                        </div>
                        
                        <div className='w-full bg-black text-white p-5 mt-5 flex items-center justify-around rounded-2xl'>
                            <a href={repoLinks[index]} rel="noopener noreferrer" target='blank' className='lg:py-4 lg:px-10 sm:py-3 sm:px-5 lg:text-2xl font-bold bg-white text-[#4682B4] rounded-sm'>Go to repo <GitHubIcon color="secondary" fontSize="large"/></a>
                            <a href={projectLinks[index]} rel="noopener noreferrer" className='lg:py-4 lg:px-10 lg:text-2xl sm:py-3 sm:px-5  font-bold bg-white text-[#4682B4] rounded-sm'>Go to Project <PanoramaIcon color='primary' /></a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
  )
}

export default ProjectsImages