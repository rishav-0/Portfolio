import React from 'react'
import dot from '../images/dot.png'
import me from '../images/me.png'


function Heading() {
  return (
    <div className=''>
        <div className="text-4xl font-semibold font-satoshi flex items-center gap-2">
            Hi, I'm
            <img className='h-20 w-20 rounded-2xl border-2 border-white shadow-xl' src={me} alt="" />
            Rishav Talukdar!
        </div>
        <p className="text-4xl font-semibold text-[#cbc4c4] mb-5">I'm a <span className='text-black'>React Developer</span> at</p>
        <div className="flex gap-8">
           <p className="text-4xl font-semibold text-[#f86e0f]">Apple Design.</p>
        <button className='rounded-full flex gap-2 items-center border border-[#e4e4e4] px-4 py-2'>
            <img src={dot} className='rounded-full w-5' alt="" />
            Open to Work
        </button> 
        </div>
        
    </div>
  )
}

export default Heading