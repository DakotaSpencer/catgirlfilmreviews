import React from 'react'
import ProductionCompany from './ProductionCompany/ProductionCompany'
import "./SingleMovie.css"
import reviews from "../../src/reviewdummydata.json"
import Review from '../Components/Reivew/Review'

function SingleMovie({movie}) {

    const date = new Date(movie.release_date)
    console.log(date)

    if (movie?.id) {
        return (
            <div className='pagediv'>
                <div className='details-container'>
                    <div id="single-movie-holder">
                        <div className='movie-img-box'><img id='single-movie-img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} /></div>
                        <div id="movie-details">
                            <div className='detail-block'><h2>{movie.title}</h2></div>
                            <div className='top-border detail-block'><p>{movie.overview}</p></div>
                            <div className='top-border detail-block'><h3>Genres:</h3><ul>
                                {movie.genres.map(genre => (
                                    <li>{genre.name}</li>
                                ))}
                            </ul></div>
                            <div className='top-border detail-block'><p>Released: {date.toDateString()}</p></div>
                            <div className='top-border detail-block'>
                                <h3>Production Companies:</h3>
                                <div id="company-logo-holder">{movie.production_companies.map(company => (
                                    <ProductionCompany company={company} />
                                ))}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {reviews.map(review => (
                    <Review review={review} />
                ))}
            </div>
        )
    }
}

export default SingleMovie