import React from 'react'

function SingleMovie({movie}) {

    if (movie?.id) {
        return (
<<<<<<< Updated upstream
            <div style={{textAlign: 'center'}}>
                <div>
                    <img src={process.env.PUBLIC_URL + '/Images/pussinboots.jpg'}/>
                </div>
                <div>
                    <p>{movie.title}</p>
                    <p>{movie.releaseDate}</p>
                    <h3>Writers:</h3>
                    <p>{movie.writers}</p>
                    <h3>Directors:</h3>
                    <p>{movie.directors}</p>
                    <h3>Starring:</h3>
                    <p>{movie.starring}</p>
                    <p>{movie.description}</p>
                    <p>{movie.IMDB}</p>
=======
            <div className='details-container'>
                <div id="single-movie-holder">
                    <div className='movie-img-box'><img id='single-movie-img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} /></div>
                    <div id="movie-details">
                        <div className='detail-block'><h2>{movie.title}</h2></div>
                        <div className='top-border detail-block'><p>{movie.overview.replaceAll("--","—")}</p></div>
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
>>>>>>> Stashed changes
                </div>
            </div>
        )
    }
}

export default SingleMovie