import '../App.css'
import GenreMovieList from '../Components/GenreMovieList'
import Header from '../Components/Header'
import ProductionHouse from '../Components/ProductionHouse'
import Slider from '../Components/Slider'
import FooterSitemapLinks from '../Components/Footer';

function Home() {
  

  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse/>
      <GenreMovieList />
      <FooterSitemapLinks/>
    </div> 
    
  )
}

export default Home