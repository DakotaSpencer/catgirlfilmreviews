import React from 'react'

function SingleMovie({movie}) {

    if (movie?.id) {
        return (
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
                </div>
            </div>
        )
    }
}

export default SingleMovie