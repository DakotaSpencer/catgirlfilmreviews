import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css'

function Navbar({getRandomMovie}) {
    const [user, setUser] = useState(false)
    const [movieData,setMovieData] = useState([])
    const [similarMovieData,setSimilarMovieData] = useState([])
    const [movieID, setMovieID] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleClick = () => {
        setUser(!user)
    }


    const search = async(e) => {
        e.preventDefault()
        let results = await axios.get(`/movie/search/${searchTerm}`)
        setSearchResults(results.data)
        console.log("Search from NavBar")
        console.log(results.data)
        console.log(searchResults)
        setSearchTerm('')
        //Search Database and return data for whatever was searched here
    }

    const changeSearch = event => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
      console.log(searchTerm)
    }, [searchTerm])

    getRandomMovie = async () => {
        let movieID = Math.ceil(Math.random()*999999);
        setMovieData(await axios.get(`/movie/${movieID}`))
        console.log("MovieData: ", movieData)
        let similarMovies = await axios.get(`/movie/${movieID}/similar`)
        console.log(similarMovies)
        setSimilarMovieData(similarMovies)
        
        console.log("Similar Movie: ", similarMovieData)
        //IF movieData or similarData return null, rerun
            //ELSE, save ID into setMovieID, then pass it down into the navigation for moviedb
    }

    return (
        <nav className='header navbar'>
            <div className='container'>
                
                <Link to="/">
                    <h1>Catgirl Film Reviews</h1>
                </Link>
                <div className='topbar-center'>
                    <form className='search-bar' onSubmit={search}>
                        <SearchIcon className='search-icon' onClick={search}/>
                        <input placeholder="Search..." type='text' className="search-input" value={searchTerm} onChange={changeSearch}/>
                    </form>
                </div>
                {user &&(
                <div>
                    <Link to="/movie" className=''>
                        <button onClick={getRandomMovie}>Random</button>
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