import React from 'react'
import TecIcons from './TecIcons'
import "./Tecnologies.css"

const Tecnologies = () => {
  return (
    <div className='min-h-screen min-w-full max-w-full bground items-center justify-center flex flex-col text-center z-1 p-5'>

          <h1 className='text-black text-3xl  md:text-7xl font-bold  min-w-screen'>Most Used Tecs</h1>
        <div className='min-h-screen max-w-full flex justify-center items-center lg:p-0 p-5 z-1'>  
            <TecIcons/>
        </div>
      
    </div>
  )
}

export default Tecnologies