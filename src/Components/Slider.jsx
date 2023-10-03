import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
const ImageBase="https://image.tmdb.org/t/p/original"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const screenWidth=window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef=useRef();
    useEffect(()=>{
        getTrendingVideos();
    },[])

    const getTrendingVideos=()=>
        GlobalAPI.getTrendingVideos.then(resp=>{
            console.log();
            setMovieList(resp.data.results)
        })

        const sliderRight=(element)=>{
            element.scrollLeft+=screenWidth-110
        }
        const sliderLeft=(element)=>{
            element.scrollLeft-=screenWidth-110
        }

  return (
    <div>
        <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer" onClick={()=>sliderLeft(elementRef.current)} />
        <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0" onClick={()=>sliderRight(elementRef.current)}/>
    
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
        {movieList.map((item)=>(
            <img src={ImageBase+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out'/>
      
        ))}
    </div>
    
    </div>
  )
}

export default Slider
