import React, { useState } from 'react'
import Heading from './Components/Heading'
import Badge from './Components/Badge'
import BookCard from './Components/BookCard'
import Map from './Components/Map'
import MapCard from './Components/MapCard'
import BlackBtn from './Components/BlackBtn'
import { experiences, workSteps } from './utils'
import MyWork from './Components/MyWork'

import Carousel from './Components/carousel/Carousel'



function Home() {

  const [step, setStep] = useState(workSteps[0])

  const handleStep = (i) => {
    console.log('hell');
    setStep(i)
    console.log(step, 'data');
  }


  return (
    <div className='max-w-screen-xl mx-auto px-6 xl:px-10 pt-4 md:pt-8 space-y-10'>
      <Heading />

      <div className="flex items-center gap-4">
        <button className='bg-black text-white rounded-full px-8 py-3 text-2xl font-medium '>Email me</button>
        <p className="text-xl ">Feel free to exploremy portfolio and reach out <br />
          <i className="fas fa-minus"></i> I'd love to connect!
        </p>
      </div>

      <div className="flex gap-8  ">
        <MyWork />
         <Carousel />
        <BookCard />
      </div>

      <div className="grid gap-4 grid-cols-3">
        {/* <Map /> */}
        <MapCard />
        <div className="col-span-2 border-4 flex flex-col justify-between border-white rounded-3xl h-[220px] shadow-lg p-2  pb-2 overflow-hidden">
          <div className="">
            <Badge text='How I work' />
          </div>
          <div className="">

            <p className="mb-4 font-semibold">{step.title}</p>
            <p className="text-gray-500 mb-2 text-sm leading-tight line-clamp-3 ">{step.description}</p>
          </div>

          <div className="flex justify-between xs:gap-2  rounded-full bg-white ">
            {
              workSteps?.map(i => {
                return (
                  <BlackBtn key={i.step} text={i.step} selected={i.step == step.step} onClick={() => handleStep(i)} />
                )
              })
            }

          </div>
        </div>
      </div>

           

    </div>
  )
}

export default Home