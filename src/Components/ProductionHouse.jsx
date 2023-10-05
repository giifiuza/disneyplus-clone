import React from 'react'
import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import nationalG from '../assets/Images/nationalG.png'
import pixar from '../assets/Images/pixar.png'
import starwar from '../assets/Images/starwar.png'

import disneyVideo from '../assets/Videos/disney.mp4'
import marvelVideo from '../assets/Videos/marvel.mp4'
import pixarVideo from '../assets/Videos/pixar.mp4'
import nationalGeo from '../assets/Videos/national-geographic.mp4'
import star from '../assets/Videos/star-wars.mp4'


function ProductionHouse() {
  const productionHouseList =[
    {
      id:1,
      image:disney,
      video:disneyVideo
    },
    {
      id:2,
      image:pixar,
      video:pixarVideo

    },
    {
      id:3,
      image:marvel,
      video:marvelVideo
    },
    {
      id:4,
      image:starwar,
      video:star
    },
    {
      id:5,
      image:nationalG,
      video:nationalGeo
    }
  ]
  return (
    <div className='flex gap-5 p-2 md:px-16'>
      {productionHouseList.map((item)=>(
        <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
          <img src={item.image} className='w-full z-[1]'/>
          <video src={item.video} autoPlay loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse