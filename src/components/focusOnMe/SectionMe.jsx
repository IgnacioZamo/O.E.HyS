import React from 'react'

const SectionMe = () => {
  return (
    <div className='py-8 px-24 bg-cyan-900 w-full'>
        <div className=' w-4/5 mx-auto flex justify-around'>
            <div className='py-5 w-3/5 px-3 flex flex-col gap-6'>
                <h3><span className='text-teal-500 font-bold text-xl'>Lorem ipsum dolor sit.</span></h3>
                <p><span className='text-slate-200 text-5xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span></p>
                <p className='text-slate-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium similique explicabo officia quia tempora alias ex, consequuntur dignissimos harum.</p>
            </div>
            <div>
                <img className='h-72' src="https://static.vecteezy.com/system/resources/thumbnails/029/282/843/small_2x/man-suit-man-formal-suit-man-formal-suit-black-suit-transparent-background-ai-generative-free-png.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default SectionMe