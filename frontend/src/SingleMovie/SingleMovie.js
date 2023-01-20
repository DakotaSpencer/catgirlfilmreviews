import React from 'react'

function SingleMovie({movie}) {

    if (movie?.id) {
        return (
            <div>
                returns a single movie
            </div>
        )
    }
}

export default SingleMovie