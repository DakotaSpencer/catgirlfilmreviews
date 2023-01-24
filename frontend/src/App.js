import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import SingleMovie from './SingleMovie/SingleMovie';
import User from './User/User';
import SearchResults from './SearchResults/SearchResults';
import moviedata from './moviedummydata.json'

function App() {

  return (
    <div className="main">
      <BrowserRouter>
        <header className="header">
          <h1>Catgirl Film Reviews</h1>
        </header>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
              path='/movie'
              element={<SingleMovie movie={moviedata.results[0]}/>}
              //movieID={:id} (This should NOT be done here and App.JS should be HEAVILY optimized. I.E. move the fetch requests into another component, but NOT IN APPJS)
            />
            <Route
              path='/user'
              element={<User/>}
              //userID={:username} 
            />
            <Route
              path='/search'
              element={<SearchResults/>}
              //userID={:userid} 
            />
          </Routes>
          </div>
          <footer><p>Legal nonsense, y'know how it is</p></footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
