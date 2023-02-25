import React from 'react'
import "./Hearts.css"

function RemainingHearts({number}) {

    const generateHearts = () => {
        let output = [];
        for (let i = 0; i < number; i++) {
            output.push(<img className='heart' src='/Images/heartoutline.svg' alt=''/>)
        }
        return output;
    }

    return (
        <div className='inline'>{generateHearts().map(heart => heart)}</div>
    )
}

export default RemainingHearts