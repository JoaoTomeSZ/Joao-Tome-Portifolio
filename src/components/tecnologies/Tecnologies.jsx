import React from 'react'
import TecIcons from './TecIcons'
import "./Tecnologies.css"

const Tecnologies = () => {
  return (
    <div className='bg-[#001F3F] min-h-screen min-w-screen bground items-center justify-center flex flex-col text-center z-1 p-5 overflow-x-hidden'>

          <h1 className='text-white text-3xl  md:text-7xl font-bold'>MY MOST USED TECS</h1>
        <div className='min-h-screen max-w-full flex justify-center items-center lg:p-0 p-5 z-1 overflow-hidden'>  
            <TecIcons/>
        </div>
      
    </div>
  )
}

export default Tecnologies