import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css'

function Navbar({getRandomMovie}) {
    const [movie,setMove] = useState({})

    getRandomMovie = () => {
        let movieID = Math.ceil(Math.random()*999999);
        let movie = axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=96fdc416520d2dd5b75c1c82c854e506`)

        //AXIOS FAILS WITH 404 ERROR. UNSURE HOW TO FIX.
    }

    return (
        <nav className='header navbar'>
            <div className='container'>
                
                <Link to="/">
                        <h1>Catgirl Film Reviews</h1>
                </Link>
                <div id='searchBar'>
                    <input></input>
                    <SearchIcon fontSize="large" className=''/>
                </div>
                <button onClick={getRandomMovie}>Random</button>
            
            <Link to="/movie">
                <button>
                    Movies
                </button>
            </Link>
            <Link to="/user">
                <button>
                    User
                </button>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar