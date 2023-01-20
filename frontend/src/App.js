import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar';
import axios from 'axios'
import { useState } from 'react';
import SingleMovie from './SingleMovie/SingleMovie';
import User from './User/User';
import SearchResults from './SearchResults/SearchResults';

function App() {

  const [movie,setMove] = useState({})

  getRandomMovie = () => {
    let movieID = Math.ceil(Math.random()*999999);
    let movie = axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=96fdc416520d2dd5b75c1c82c854e506`)

  }


  return (
    <div className="main">
      <BrowserRouter>
        <header className="header">
          <h1>Catgirl Film Reviews</h1>
        </header>
        <Navbar getRandomMovie={getRandomMovie} />
        <div className='pages'>
          <Routes>
            <Route
              path='/movie'
              element={<SingleMovie/>}
              //movieID={:id} (This should NOT be done here and App.JS should be HEAVILY optimized. I.E. move the fetch requests into another component, but NOT IN APPJS)
            />
            <Route
              path='/user'
              element={<User/>}
              //userID={:username} 
            />
            <Route
              path='/search'
              element={<SearchResults/>}
              //userID={:userid} 
            />
          </Routes>
          </div>
          <footer><p>Legal nonsense, y'know how it is</p></footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
