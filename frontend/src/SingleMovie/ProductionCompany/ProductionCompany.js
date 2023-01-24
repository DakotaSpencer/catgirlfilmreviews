import React from 'react'
import "./ProductionCompany.css"

function ProductionCompany({company}) {
    return (
        <div className='logo-holder'>
            <img className='logo-img' src={`https://image.tmdb.org/t/p/original${company.logo_path}`} />
            <i>{company.name}</i>
        </div>
    )
}

export default ProductionCompany