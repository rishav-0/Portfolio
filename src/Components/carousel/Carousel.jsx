import React from 'react'
import ImageScrollBend from './ImageScrollBend'
import Badge from '../Badge'

import furniture from '../../images/furniture.png'
import exclusive from '../../images/exclusive.png'
import shopping from '../../images/shopping.png'
import hoodie from '../../images/hoodie.png'

function Carousel() {

    const images = [
       hoodie,
        furniture,
        exclusive,
        shopping
    ]

  return (
    <div className="border-4 border-white rounded-3xl w-[220px] h-[220px] shadow-lg p-2 pb-0 overflow-hidden">
                <Badge  text="My Projects"/>
            <ImageScrollBend images={images} />
            <p className="text-center font-semibold text-sm cursor-pointer">View All</p>
    </div>
  )
}

export default Carousel