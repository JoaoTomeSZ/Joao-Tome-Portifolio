import React from 'react'
import TecIcons from './TecIcons'
import "./Tecnologies.css"
const Tecnologies = () => {
  return (
    <div className='h-full w-full max-w-full bg-white items-center flex flex-col p-5'>
          <h1 className='text-black text-3xl lg:text-7xl font-bold '>Most Used Tecs</h1>
        <div className='max-w-full max-h-full flex justify-center items-center'>  
            <TecIcons/>
        </div>
    </div>
  )
}

export default Tecnologies