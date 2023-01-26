import React from 'react'
import "./Hearts.css"

function Hearts({number}) {

    const generateHearts = () => {
        let output = [];
        for (let i = 0; i < number; i++) {
            output.push(<img className='heart' src='/Images/simple-heart.svg' />)
        }
        return output;
    }

    return (
        <div className='inline'>{generateHearts().map(heart => heart)}</div>
    )
}

export default Hearts