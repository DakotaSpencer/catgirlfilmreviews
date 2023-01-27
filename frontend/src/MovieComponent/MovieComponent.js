import React, { useEffect } from 'react'
import "./moviecomponent.css"

const MovieComponent = ({movie}) => {
    useEffect(() => {
        console.log("Props passed into MovieComponent")
        console.log(movie)
    })
    if (movie?.id) {
        return (
            <div className=''>
                <div id="">
                    <div className=''>
                        <img id='single-movie-img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} /></div>
                    <div id="">
                        <div className=''><h2>{movie.title}</h2></div>
                        <div className=''><p>Released: {movie.release_date}</p></div>
                    </div>
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