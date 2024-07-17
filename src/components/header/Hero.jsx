import React from 'react'
import Button from '../items/Button';

export const Hero = () => {
  return (
    <div className='w-full h-4/5 min-h-[500px]  relative top-0'>
      <div className='absolute top-0 w-full h-full min-h-[500px] bg-gradient-to-b from-slate-900 to-gray-600/30'></div>
      <img className='w-full h-full min-h-[500px] object-cover z-0' src="https://chaer.com.ar/wp-content/uploads/2019/07/LEY.jpg" alt="background" />
      <div className='absolute top-1/2 sm:right-1/3 right-1/2 sm:translate-x-0 translate-x-1/2 lg:-translate-y-1/2 -translate-y-1/3 sm:w-6/12 w-full'>
        <div className='flex flex-col gap-5 lg:mb-24 mb-12'>
          <div>
            <p className='lg:text-4xl sm:text-2xl text-lg text-white mb-2 sm:text-start text-center'>Protegiendo tu <span className='font-bold lg:text-4xl sm:text-2xl text-lg'>equipo</span></p>
            <p className='lg:text-5xl sm:text-2xl text-lg text-white sm:text-start text-center'>Para garantizar tu<span className='font-bold lg:text-5xl sm:text-2xl text-lg'> éxito</span></p>
          </div>
          <p className='text-slate-100 sm:text-start text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, magni nisi quae earum esse mollitia aspernatur delectus porro ut excepturi exercitationem quidem in. Omnis aspernatur aut beatae unde laborum maxime!</p>
        </div>
        <div className='w-full flex justify-center sm:justify-start'>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Hero