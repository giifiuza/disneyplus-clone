import React from 'react'
const ImageBase="https://image.tmdb.org/t/p/original"

function MovieCard({movie}) {
  return (
    <>
      <img src={ImageBase+movie.poster_path} className='w-[250px] md:w-[200] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110' />
    </>
  )
}

export default MovieCard
