import React, { useEffect } from 'react'
import MovieComponent from '../MovieComponent/MovieComponent';
import "../MovieComponent/MovieComponent";
import "./movielist.css"

const MoviesList = (props) => {
    useEffect(() => {
        console.log("Props in MoviesList:");
        console.log(props);
        console.log("Props.Moviedata:");
        console.log(props.moviedata);
    })
    return (
        <div className='flex-container'>
                {
                props.moviedata.map((movie)=>(
                <div key={movie.imdb_id}>
                    <MovieComponent movie={movie}/>
                </div>
                ))
                }
        </div>
    )
}

export default MoviesList