import React from 'react'
import Badge from './Badge'

function Map() {
  return (
    <div className="border-4 border-white rounded-3xl w-[220px] h-[220px] p-2 pb-0 overflow-hidden">
                <Badge  text="What I'm reading"/>
                <p className="text-sm mt-2">Dister Rams the <br />
                    Complete Works
                </p>
                <p className="text-xs text-[#8e8e8e] mb-2">Klaus Klemp</p>
                <div className="flex justify-center">
                    <div className="border-4 flex justify-center border-white bg-[#e4e4e4] w-[140px] rounded-t-3xl p-4">
                        <img className='w-[80px]' src="https://i.pinimg.com/736x/93/da/c7/93dac7cfa76e9adee84563f72bd3ff47.jpg" alt="" />
                    </div>
                </div>
            </div>
  )
}

export default Map