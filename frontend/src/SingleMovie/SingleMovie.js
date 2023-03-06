import React from 'react'
import ProductionCompany from './ProductionCompany/ProductionCompany'
import "./SingleMovie.css"
import Review from '../Components/Reivew/Review'
import { useState,useEffect } from 'react'
import axios from "axios"

function SingleMovie({movie}) {
    const date = new Date(movie?.release_date)
    console.log(date)
    const port = 7222;

    const [reviews,setReviews] = useState([])
    const [reviewTitle, setReviewTitle] = useState('')
    const [reviewBody, setReviewBody] = useState('')

    const getReviews = async (id) => {
        let results = await axios.get(`/movie/${id}/reviews/`)
        console.log(results.data)
        setReviews(results.data)
    }

    const postReview = async(e) => {
        e.preventDefault()
        console.log("Review posted \nReview Title: ", reviewTitle, "\nReview Body: ", reviewBody)
    }

    const changeReviewTitle = event => {
        event.preventDefault()
        setReviewTitle(event.target.value)
        console.log(reviewTitle)
    }

    const changeReviewBody = event => {
        event.preventDefault()
        setReviewBody(event.target.value)
        console.log(reviewBody)
    }

    useEffect(() => {
        getReviews(76543)
        getReviews(76543)
    },[])

    //catgirlfilmreviews/movie/id
    //grab the movie by the param id
    //call https://localhost:7222/movie/{id} to get movie on load

    if (movie?.id) {
        return (
            <div className='pagediv'>
                <div className='details-container'>
                    <div id="single-movie-holder">
                        <div className='movie-img-box'><img id='single-movie-img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} /></div>
                        <div id="movie-details">
                            <div className='detail-block'><h2>{movie.title}</h2></div>
                            {movie?.tagline ? <div className='top-border detail-block'><p>{movie.tagline}</p></div> : <></>}
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
                
                <div>
                    <h1 className='reviewdiv'>Reviews:</h1>
                    {reviews.map(review => (
                        <Review review={review} />
                    ))}
                    <form onSubmit={postReview}>
                        <input className='reviewTitle' placeholder='Title...' value={reviewTitle} onChange={changeReviewTitle}/>
                        <input className='reviewBody' placeholder='Write a review...' value={reviewBody} onChange={changeReviewBody}/>
                        <button type='submit'>Submit Review</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default SingleMovie