import React from 'react'

function Badge({text}) {
  return (
    <button className='bg-white text-sm px-3 py-1 rounded-full'>{text}</button>
  )
}

export default Badge