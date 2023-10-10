import { useNavigate } from "react-router-dom"
import React from 'react'
const ImageBase="https://image.tmdb.org/t/p/original"

function MovieCard({movie}) {

  const navigate = useNavigate();

  function handleMovie(movieId) {
    navigate(`/movie/${movieId}`)
  }

  return (
    <>
      <img onClick={() => handleMovie(movie.id)} src={ImageBase+movie.poster_path}
       className='w-[250px] md:w-[200] rounded-lg
        hover:border-[3px] border-gray-400
        hover:scale-110 cursor-pointer
        transition-all duration-150 ease-in' />
    </>
  )
}

export default MovieCard
