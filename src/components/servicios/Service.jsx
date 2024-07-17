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
    <div className='bg-gradient-to-b from-slate-200 to-slate-100 py-10 z-20'>
      <div className='w-4/5 mx-auto flex justify-between'>
        {
          targetService.map((target,key)=>(
            <div className='max-w-52 p-2 border border-black' key={key}>
              <FontAwesomeIcon icon={target.icon}/>
              <p>{target.tit}</p>
              <p>{target.desc}</p>
            </div>
          ))
        }
        
      </div>

    </div>
  )
}

export default Service

