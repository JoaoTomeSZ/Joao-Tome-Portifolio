import React from 'react'
import TecIcons from './TecIcons'

const Tecnologies = () => {
  return (
    <div className='h-[calc(100vh-100px)] max-h-full w-full max-w-full bg-black p-10'>
        <div className='max-w-full flex justify-center'> 
            <h1 className='text-white lg:text-6xl'>Most Used Tecs</h1>
            <TecIcons/>
        </div>
    </div>
  )
}

export default Tecnologies