import React from 'react'
import { experiences } from '../utils'
import Badge from './Badge'

function MyWork() {
  return (
    <div className="relative w-[220px] h-[220px] border-4 border-white rounded-3xl shadow-lg overflow-y-auto no-scrollbar">

    <div className="sticky ml-2 top-2  z-30">
        <Badge text='My Work' />
    </div>

  {/* Top Gradient */}
  <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none rounded-t-3xl" />

  {/* Bottom Gradient */}
  <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none rounded-b-3xl" />

  <div className="p-2 pb-0 relative z-20">
    {experiences.map((item, index) => (
      <div key={index} className="flex items-center mb-6">
        <div className="bg-black rounded-full w-2 h-2"></div>
        <div className="ml-4">
          <h4 className="font-semibold text-sm">{item.title}</h4>
          <p className="text-xs text-gray-500">
            {item.year} – {item.type}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


  )
}

export default MyWork