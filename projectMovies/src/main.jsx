import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowerRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx';
import Search from './pages/Search.jsx';

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowerRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/"element={<Home />}/>
          <Route path="movie/:id"element={<Movie />}/>
          <Route path="search"element={<Search />}/>
        </Route>
      </Routes>
    </BrowerRouter>
  </React.StrictMode>,
)
