import React, { useEffect } from 'react'
import "./moviecomponent.css"
import {Link} from 'react-router-dom'

const MovieComponent = ({movie}) => {
    useEffect(() => {
        console.log("Props passed into MovieComponent")
        console.log(movie)
    })
    if (movie?.id) {
        return (
            <div className='movie-container'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=''/>
                <div id="">
                    <div className='movielink'>
                        <Link to="/movie" className=''>
                            <h3 className='movielink'>{movie.title}</h3>
                        </Link>
                    </div>
                    <div className=''><p>Released: {movie.release_date}</p></div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                Unable to retrieve data properly.
            </div>
        )
        
    }
}

export default MovieComponent