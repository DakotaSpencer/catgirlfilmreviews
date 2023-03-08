import React from 'react'
import ProductionCompany from './ProductionCompany/ProductionCompany'
import "./SingleMovie.css"
import Review from '../Components/Reivew/Review'
import { useState,useEffect } from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

function SingleMovie() {
    const {user} = useAuthContext()
    const params = useParams();

    const [reviews,setReviews] = useState([])
    const [reviewTitle, setReviewTitle] = useState('')
    const [reviewBody, setReviewBody] = useState('')
    const [rating, setRating] = useState(0)
    const [movie,setMovie] = useState({})
    const [date,setDate] = useState(null)
    const [bodycharcount, setBodyCharCount] = useState(0);
    const bodyMax = 5000;
    const [titlecharcount, setTitleCharCount] = useState(0);
    const titleMax = 100

    const getReviews = async (id) => {
        let results = await axios.get(`/movie/${id}/reviews/`)
        console.log("Reviews:")
        console.log(results)
        setReviews(results.data)
    }

    const postReview = async(e) => {
        e.preventDefault()
        console.log("Current User ID:")
        console.log(user)
        //review post takes in reviewuserid, (datetime) reviewtime, (int) reviewmovieid, reviewbody, reviewtitle, (int) reviewrating
        // ReviewUserId
        // ReviewTime
        // ReviewMovieId
        // ReviewBody
        // ReviewTitle
        // ReviewRating
        let currentTime = new Date().getTime()
        let currentDate = new Date().getDate()
        let timestamp = currentDate + " at " + currentTime

        const response = await fetch('/createreview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "ReviewUserId": user, 
                "ReviewMovieId": params.id,
                "ReviewBody": reviewBody,
                "ReviewTitle": reviewTitle,
                "ReviewRating": rating
            })
        })

        const reviewJSON = await response.json()
        console.log("Review JSON posted:")
        console.log(reviewJSON)
        setReviewBody('')
        setReviewTitle('')
        setRating(0)
        getReviews(params.id)
    }

    const changeReviewTitle = event => {
        if(event.target.value.length-1>=titleMax){
            console.log(`Title cannot exceed ${titleMax} characters`)
        }else{
            setTitleCharCount(event.target.value.length)
            event.preventDefault()
            setReviewTitle(event.target.value)
            console.log(reviewTitle)
        }

    }

    const changeReviewBody = event => {
        if(event.target.value.length-1>=bodyMax){
            console.log(`Body cannot exceed ${bodyMax} characters`)
        }
        else{
            
            setBodyCharCount(event.target.value.length)
            event.preventDefault()
            setReviewBody(event.target.value)
            console.log(reviewBody)
        }
    }

    const changeRating = async event => {
        event.preventDefault()
        await setRating(event.target.value)
        console.log(rating)
    }

    const getMovie = async (id) => {
        const response = await axios.get(`/movie/${id}/`)
        if (response?.data?.id) {
            setMovie(response.data)
            const date = new Date(response.data?.release_date)
            setDate(date)
        }
    }

    useEffect(() => {
        getMovie(params.id)
        getReviews(params.id)
        console.log("ID",params.id)
        console.log(user)
    },[params])

    //catgirlfilmreviews/movie/id
    //grab the movie by the param id
    //call https://localhost:7222/movie/{id} to get movie on load

    if (movie?.id) {
        return (
            <div className='pagediv'>
                <div style={{position:'absolute', zIndex:'-1',  width:'100%', height:'1030px', backgroundColor:'#000000d6'}}>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} style={{opacity:'25%',  width:'100%', height:'100%'}}/>
                </div>
                
                <div className='details-container' style={{zIndex:'-1'}}>
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
                    <div className='pagediv'>
                        <form onSubmit={postReview} className='login'>
                            <h1 style={{color:"black"}}>Post a Review:</h1>
                            <div className='spacecol'>
                                <input className='reviewTitle' placeholder='Title...' value={reviewTitle} onChange={changeReviewTitle}/>
                                <p>{titlecharcount}/{titleMax}</p>
                                <textarea className='reviewBody' placeholder='Write a review...' value={reviewBody} onChange={changeReviewBody}>
                                </textarea>
                                <p>{bodycharcount}/{bodyMax}</p>
                                <p>Rating: <input type={"number"} placeholder="0" value={rating} min={0} max={5} onChange={changeRating}/></p>
                                <button type='submit' className='margintop'>Submit Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleMovie