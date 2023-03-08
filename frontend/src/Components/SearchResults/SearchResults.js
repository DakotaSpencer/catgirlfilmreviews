import axios from 'axios'
import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import "./SearchResults.css"

const SearchResults = () => {

  const [movieList,setMovieList] = useState([])

  const params = useParams()

  const getMovies = async query => {
    const response = await axios.get(`/movie/search/${query}`)
    console.log(response)
    setMovieList(response.data)
  }

  useEffect(() => {
    getMovies(params.query)
  },[params])
  if (movieList.length == 0) {
    return <h3>No movies of that search</h3>
  }
  else {
  return (
    <div className='search-results'>
      {movieList.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <img src={movie.poster_path} />
          <h3>{movie.title}</h3>
        </Link>
      ))}
    </div>
  )}
}

export default SearchResults