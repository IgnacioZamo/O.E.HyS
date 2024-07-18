import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faHelmetSafety, faPersonDigging } from '@fortawesome/free-solid-svg-icons';



const Service = () => {
    const targetService = [{
      icon: faUserShield,
      tit: "Titulo 1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus, modi facere veniam exercitationem doloremque laudantium enim facilis amet unde."      
    },{
      icon: faHelmetSafety,
      tit: "Titulo 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus, modi facere veniam exercitationem doloremque laudantium enim facilis amet unde."      
    },{
      icon: faPersonDigging,
      tit: "Titulo 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus, modi facere veniam exercitationem doloremque laudantium enim facilis amet unde."      
    }
  ]

  return (
    <div className='bg-gradient-to-b from-slate-200 to-slate-100 py-10 '>
      <div className='w-4/5 mx-auto flex justify-center gap-10 relative top-0 -translate-y-1/4 mb-10'>
        {
          targetService.map((target,key)=>(
            <div className='max-w-52 p-2 border border-black bg-slate-100 rounded-md' key={key}>
              <div className='flex justify-center py-5'><FontAwesomeIcon className='text-blue-500 text-4xl' icon={target.icon}/></div>
              <p className='text-center'>{target.tit}</p>
              <p>{target.desc}</p>
            </div>
          ))
        }
      </div>
      <div className='grid grid-cols-2 w-4/5 mx-auto gap-10'>
        <div className=''>
          <img src="https://ashconsultores.com.ar/wp-content/uploads/2022/04/Seguridad-e-higiene-industrial.jpg" alt="" />
        </div>
        <div className='p-5 flex flex-col gap-10 justify-center items-center'>
          <h2 className='font-bold text-3xl text-center '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tempore sequi velit ut accusantium, rem assumenda modi vitae, beatae, minima voluptatum. Blanditiis repellendus aliquam error aut recusandae porro a maxime.</p>
          <ul className="list-none pl-4 w-full ">
            <li className="relative mb-2 before:content-['✓'] before:absolute before:-left-4 before:text-green-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li className="relative mb-2 before:content-['✓'] before:absolute before:-left-4 before:text-green-500">Lorem ipsum dolor sit amet, consectetur .</li>
            <li className="relative mb-2 before:content-['✓'] before:absolute before:-left-4 before:text-green-500">Lorem ipsum dolor sit amet, consectetur adipisicing elitadipisicing elit. Quibusdam</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Service

