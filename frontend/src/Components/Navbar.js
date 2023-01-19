import React from 'react'

function Navbar({getRandomMovie}) {

    return (
        <nav>
            <button onClick={getRandomMovie}>Random</button>
        </nav>
    )
}

export default Navbar