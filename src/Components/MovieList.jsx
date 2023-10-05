import React, { useEffect, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import MovieCard from './MovieCard';


function MovieList({genreID}) {
    const [movieList, setMovieList]=useState([])
    useEffect(()=>{
        getMovieByGenreId();
    },[])

    const getMovieByGenreId=()=>{
        GlobalAPI.getMovieByGenreId(genreID).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
  
    return (
        <div className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-10'>
            {movieList.map((item,index)=>(
                <MovieCard movie={item}/>
            ))}
        </div>
  )
}

export default MovieList
