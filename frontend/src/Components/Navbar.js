import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Search } from "@material-ui/icons"
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css'

function Navbar({getRandomMovie}) {
    const [user, setUser] = useState(true)
    const [movie,setMove] = useState({})

    const handleClick = () => {
        setUser(!user)
    }

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
                <div className='topbar-center'>
                    <div className='search-bar'>
                        <SearchIcon className='search-icon'/>
                        <input placeholder="Search..." type={Text} className="search-input"/>
                        {/* SEARCH BAR IS NOT HOOKED UP TO FUNCTIONS, AND DOES NOTHING AT THE MOMENT */}
                    </div>
                </div>
                <button onClick={getRandomMovie}>Random</button>
            
            <Link to="/movie">
                <button>
                    Movies
                </button>
            </Link>
            {user &&(
                <div>
                <span>
                    <a href='/user' className='link'>                
                        <button>
                            Account
                        </button>
                    </a>
                </span>
                <button onClick={handleClick} className='logout'>Log out</button>
              </div>
              )}
              {!user && (
                <div>
                  <Link to='' className='link'>
                    <button onClick={handleClick} className='logout'>Log In</button>
                  </Link>
                  <Link to='' className='link'>
                    <button onClick={handleClick} className='logout'>Sign Up</button>
                  </Link>
                </div>
              )}
            </div>
        </nav>
    )
}

export default Navbar