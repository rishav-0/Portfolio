import React from 'react'

function BlackBtn({text,onClick,selected}) {
  return (
    <button onClick={onClick} className={`${selected ?'bg-black text-white':'bg-white text-black'} rounded-full whitespace-nowrap  px-5 py-2 font-semibold text-xs`}>{text}</button>
  )
}

export default BlackBtn