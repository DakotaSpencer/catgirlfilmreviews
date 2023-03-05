import React from 'react'
import MoviesList from '../Components/MoviesList/MoviesList';
import moviedata from '../moviedummydata.json'
import SearchIcon from '@mui/icons-material/Search';
import "./landing.css"

const Landing = () => {
  return (
    <div className='bg'>
      
        <div className='logodiv'>
          <h1 style={{marginTop: '50px', marginLeft: '70px'}} className="landinglogo"><img src={process.env.PUBLIC_URL + '/Images/logopink.png'} className="landinglogoimg"/>
            <span className='logotext' style={{fontSize: '100px'}}>Catgirl Film Reviews</span>
            <div className='topbar-center' style={{margin:'auto',fontSize: '20px'}}>
              <div className='search-bar'>
                  <SearchIcon className='search-icon'/>
                  <input placeholder="Search..." type='text' className="search-input"/>
                  {/* SEARCH BAR IS NOT HOOKED UP TO FUNCTIONS, AND DOES NOTHING AT THE MOMENT */}
              </div>
            </div>
          </h1>
        </div>
        
        <div>
          <img src={process.env.PUBLIC_URL + '/Images/moviebg_placeholder.png'} className="landingbgimage"/>
        </div>
      {/* <div className='landingcontent'>
        <h1 style={{marginTop: '50px', marginLeft: '70px', fontSize: '60px', color: '#D194D6'}}>Movies</h1>
        <MoviesList moviedata={moviedata.results}/>
      </div> */}
      
    </div>
  )
}

export default Landing