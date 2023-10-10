import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi';
import { Rating } from 'flowbite-react';
import Header from '../Components/Header';
import './page.css'
import FooterSitemapLinks from '../Components/Footer';
const ImageBase = "https://image.tmdb.org/t/p/w500/"

function MoviePage() {

  const { id } = useParams();
  const [detail, setDetails] = useState([]);

  const { title,
    overview, poster_path, original_language, popularity, vote_average, release_date, revenue } = detail


  const getMovieById = () => {
    GlobalApi.getMovieById(id).then(resp => {
      setDetails(resp.data)
      console.log(resp.data)
    })
  }

  useEffect(() => {
    getMovieById();
  }, [])


  return (
    <>
      <Header />

      <div className='container' >
        <h2 className='text-white text-center text-4xl title'>{title}</h2>
        <div className='all'>

          <img className='img' src={ImageBase + poster_path} />
          <div className='p-10'>
            <h1 className='font-bold text-white text-2xl mt-8'>Language</h1>
            <h2 className=' font-medium text-gray-400 text-xl'>{original_language}</h2>

            <h1 className='font-bold text-white text-2xl mt-8'>Overview</h1>
            <h2 className=' font-medium text-gray-400 text-xl'>{overview}</h2>

            <h1 className='font-bold text-white text-2xl mt-8'>Popularity</h1>
            <h2 className=' font-medium text-gray-400 text-xl'>{popularity}</h2>

            <h1 className='font-bold text-white text-2xl mt-8'>Release Date</h1>
            <h2 className=' font-medium text-gray-400 text-xl'>{release_date}</h2>

            <h1 className='font-bold text-white text-2xl mt-8'>Vote vote_average</h1>
            <h2 className=' font-medium text-gray-400 text-xl'>{vote_average}</h2>

            <h1 className='font-bold text-white text-2xl mt-8'>Revenue</h1>
            <h2 className=' font-medium text-gray-400 text-xl'>${revenue}</h2>

          </div>
        </div>
      </div>

    <FooterSitemapLinks/>
    
    </>
  )
}

export default MoviePage
