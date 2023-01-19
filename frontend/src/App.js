import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import axios from 'axios'
import { useState } from 'react';

function App() {

  const [movie,setMove] = useState({})

  getRandomMovie = () => {
    let movieID = Math.ceil(Math.random()*999999);
    let movie = axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=96fdc416520d2dd5b75c1c82c854e506`)

  }


  return (
    <div className="main">
      <header className="header">
        <h1>Catgirl Film Reviews</h1>
      </header>
      <Navbar getRandomMovie={getRandomMovie} />
      <footer><p>Legal nonsense, y'know how it is</p></footer>
    </div>
  );
}

export default App;
