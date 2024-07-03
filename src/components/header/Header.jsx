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
                        <img className='h-12' src="https://images.vexels.com/media/users/3/129876/isolated/preview/1043ea6260755f02bafd6d2fa98072ec-icono-de-casco-de-construccion.png" alt="logo"/>
                    </div>
                    <p className='flex flex-col text-start'><span className='text-2xl text-cyan-600'>Ever Ojeda</span>
                    <span className='text-slate-800'>Higiene y seguridad</span></p>
                </div>
            </div>
            <div className=''>
                <ul className='flex justify-around items-center mx-auto h-full'>
                    {itemsNavbar.map((menus,key)=>(
                        <li key={key} className='font-semibold hover:text-cyan-700 hover:cursor-pointer'>
                            {menus}
                        </li>
                    ))}
                </ul>                
            </div>
        </div>
        <img className='absolute top-0 w-full' src="https://sisanjuan.b-cdn.net/media/k2/items/cache/b2f92311964e73fcd65f099c54fa935f_XL.jpg?t=20230614_133918" alt="" />
    </div>
  )
}

export default Header