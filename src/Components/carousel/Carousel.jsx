import React from 'react'
import ImageScrollBend from './ImageScrollBend'
import Badge from '../Badge'

function Carousel() {

    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpQId0rRbHfWRf2zXudHd23eyAyU1mw_YZGpw_PnSxhtYfR94xgKvpK65nMCg_amo8tQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVTHCaE6EhrK2Ic7zZhaa8fs32AURCuU8YwTaYCNAU_9ge0kGSjoTLVwX1AQthesul9k&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoNblFN6FYANl2ZDgAuFm_RAo2i3XUPHwGnbcZJo-4dDR2Ja9ghHmZ7WITfuJhPS_NoQ&usqp=CAU',
        'https://lh3.googleusercontent.com/vdKbcWCGwxtvvoZG5LK-rQcix_6mXl7Z2zzVil3ggiZ6hUETgtSVdbw0hrNAbRoCTCuSt_yn4EJrBS5XzILlYBxGIhMuikJ9nVt1HVA5nI76zA5ludsdTQF9t-ANf4lZPV7Wli9JzTrA8fj1wa5YAgcza7EK1Y8uqcj92Hjm1jaJJ10OJAkdaQg6oB7lKQ',
    ]

  return (
    <div className="border-4 border-white rounded-3xl w-[220px] h-[220px] shadow-lg p-2 pb-0 overflow-hidden">
                <Badge  text="What I'm reading"/>
            <ImageScrollBend images={images} />
            <p className="text-center font-semibold text-sm cursor-pointer">View All</p>
    </div>
  )
}

export default Carousel