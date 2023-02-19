import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css'

function Navbar({getRandomMovie}) {
    const [user, setUser] = useState(false)
    // const [movie,setMovie] = useState({})

    const handleClick = () => {
        setUser(!user)
    }

    getRandomMovie = async () => {
        let movieID = Math.ceil(Math.random()*999999);
        let movie = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=96fdc416520d2dd5b75c1c82c854e506`)
        let similarMovie = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=96fdc416520d2dd5b75c1c82c854e506`)
        console.log(movie)
        console.log(similarMovie)
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
                        <input placeholder="Search..." type='text' className="search-input"/>
                        {/* SEARCH BAR IS NOT HOOKED UP TO FUNCTIONS, AND DOES NOTHING AT THE MOMENT */}
                    </div>
                    
                </div>
                {user &&(
                <div>
                    <Link to="/movie" className=''>
                        <button onClick={getRandomMovie}>Random</button>
                    </Link>
                    <Link to="/movie" className=''>
                        <button>
                            Movies
                        </button>
                    </Link>
                    <Link to='/user' className=''>               
                        <button>
                            Account
                        </button>
                    </Link>
                    <Link to='' className='link'>
                        <button onClick={handleClick} className='logout'>Log out</button>
                    </Link>
                </div>
                )}
                {!user && (
                <div>
                    <Link to="/movie" className=''>
                        <button onClick={getRandomMovie}>Random</button>
                    </Link>
                    <Link to="/movie" className=''>
                        <button>
                            Movies
                        </button>
                    </Link>
                    <Link to='/login' className='link'>
                        <button onClick={handleClick} className='logout'>Log In</button>
                    </Link>
                    <Link to='/register' className='link'>
                        <button onClick={handleClick} className='logout'>Sign Up</button>
                    </Link>
                </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar