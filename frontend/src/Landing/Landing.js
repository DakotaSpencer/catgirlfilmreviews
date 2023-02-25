import React from 'react'
import MoviesList from '../Components/MoviesList/MoviesList';
import moviedata from '../moviedummydata.json'
import "./landing.css"

const Landing = () => {
  return (
    <div className='bg'>
      
        <div className='logodiv'>
          <h1 style={{marginTop: '50px', marginLeft: '70px', fontSize: '100px'}} className="landinglogo"><img src={process.env.PUBLIC_URL + '/Images/logopink.png'} className="landinglogoimg"/><span className='logotext'>Catgirl Film Reviews</span></h1>
        </div>
        
        <div>
          <img src={process.env.PUBLIC_URL + '/Images/moviebg_placeholder.png'} className="landingbgimage"/>
        </div>
      <div className='landingcontent'>
        <h1 style={{marginTop: '50px', marginLeft: '70px', fontSize: '60px', color: '#D194D6'}}>Movies</h1>
        <MoviesList moviedata={moviedata.results}/>
      </div>
      
    </div>
  )
}

export default Landing