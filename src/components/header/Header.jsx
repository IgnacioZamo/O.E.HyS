import React from 'react'

const Header = () => {
    const itemsNavbar = ["Home", "Servicio", "Vision", "Contacto"];
  return (
    <div className='relative'>
        <div className='p-10 w-full grid grid-cols-2 relative z-20'>
            {/* logo */}
            <div className='flex pl-16'>
                <div className='flex gap-5 justify-center items-center hover:cursor-pointer'>
                    <div className=' flex justify-center'>
                        <img className='h-12 text-white' src="https://images.vexels.com/media/users/3/129876/isolated/preview/1043ea6260755f02bafd6d2fa98072ec-icono-de-casco-de-construccion.png" alt="logo"/>
                    </div>
                    <p className='flex flex-col text-start'><span className='text-2xl text-cyan-600'>Ever Ojeda</span>
                    <span className='text-slate-100'>Higiene y seguridad</span></p>
                </div>
            </div>
            <div className=''>
                <ul className='flex justify-around items-center mx-auto h-full'>
                    {itemsNavbar.map((menus,key)=>(
                        <li key={key} className='font-semibold text-white hover:text-cyan-700 hover:cursor-pointer'>
                            {menus}
                        </li>
                    ))}
                </ul>                
            </div>
        </div>
        <div className='absolute top-0 w-full h-screen overflow-hidden z-0'>
            <div className='absolute top-0 w-full h-4/5 bg-gradient-to-b from-slate-900 to-gray-600/30'></div>
            <img className='w-full h-4/5 object-cover' src="https://chaer.com.ar/wp-content/uploads/2019/07/LEY.jpg" alt="background" />
            <div className='absolute top-1/3 left-1/3 -translate-y-1/2 -translate-x-1/2 | lg:w-1/3 sm:w-1/2 w-10/12 flex justify-center flex-col gap-1'>
                <p className='lg:text-4xl sm:text-2xl text-lg text-white '>Protegiendo tu <span className='font-bold  lg:text-4xl sm:text-2xl text-lg'>equipo</span></p>
                <p className='lg:text-5xl sm:text-2xl text-lg text-white '>Para garantizar tu<span className='font-bold  lg:text-5xl sm:text-2xl text-lg'> exito</span></p>
                <p className='text-slate-100 mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, magni nisi quae earum esse mollitia aspernatur delectus porro ut excepturi exercitationem quidem in. Omnis aspernatur aut beatae unde laborum maxime.!</p>
            </div>

        </div>
    </div>
  )
}

export default Header