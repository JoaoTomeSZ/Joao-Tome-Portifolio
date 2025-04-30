import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollTop = () => {
  return (
    <div className='bg-white fixed bottom-0 left-[50%] md:w-8 md:h-8 rounded-full scroll-smooth justify-center items-center'>
        <a href="#hero-id" className='flex items-center justify-center text-center'>
            <ArrowUpwardIcon/>
        </a>
        
    </div>
  )
}

export default ScrollTop