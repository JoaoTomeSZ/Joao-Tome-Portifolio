import React from 'react'
import LaptopIcon from '@mui/icons-material/Laptop';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import { useEffect, useRef, useState } from 'react';

const CardBoxes = () => {
    const ref = useRef(null);
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible(entry.isIntersecting),
          { threshold: 0.1 } 
        );
    
        if (ref.current) {
          observer.observe(ref.current);
        }
    
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, []);

    const texts = ["Ux Designer", "Fullstack Developer"]
    const icons = [<ArchitectureIcon fontSize='large' />, <LaptopIcon fontSize='large' /> ]

  return (
    <div ref={ref}  className={`max-w-full w-auto flex items-center justify-center transition-opacity duration-2000 ease-in-out  ${
        isVisible ? 'opacity-100 translate-y-[-10px] card-animate' : 'opacity-0 translate-y-[-10px] '
      }`}>
        <ul  className='flex gap-10 [&>li:nth-child(2)]:bg-white [&>li:nth-child(1)]:text-white '>
            {texts.map((text, index) => (
            <li id='cardbox-list' key={index} className=' max-w-full w-[150px] h-[100px] sm:w-[250px] lg:h-[250px] bg-black lg:text-3xl flex text-center items-center justify-center p-1 rounded-sm'>
                <p >{icons[index]}{text}</p>
            </li>
        

        ))}
        </ul>
        
        
    </div>
  )
}

export default CardBoxes