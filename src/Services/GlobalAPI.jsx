import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='2c44c55e6a3d0df71f07d017eccc7c3a'
//http://api.themoviedb.org/3/trending/all/day?api_key=2c44c55e6a3d0df71f07d017eccc7c3a

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2c44c55e6a3d0df71f07d017eccc7c3a'

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}