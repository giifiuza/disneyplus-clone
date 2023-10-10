import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css'
import Home from './Pages/Home.jsx'
import MoviePage from './Pages/MoviePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home }/>
        <Route path='/movie/:id' Component={MoviePage}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
