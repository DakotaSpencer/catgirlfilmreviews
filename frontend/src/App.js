import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import {Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import SingleMovie from './SingleMovie/SingleMovie';
import User from './User/User';
import SearchResults from './Components/SearchResults/SearchResults';
import moviedata from './moviedummydata.json'
import Landing from './Landing/Landing';
import Login from './Login/Login';
import Register from './Register/Register';
import { useAuthContext } from './hooks/useAuthContext';
import MoviesList from './Components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';

function App() {
  const {user} = useAuthContext()
  const [random, setRandom] = useState(Math.floor(Math.random() * 25) + 1)
  console.log(random)
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 25) + 1)
    checkRandom()
  }, [])
  

  function checkRandom() {
    if(moviedata.results[random] = random){
      console.log("GOT EXISTING MOVIE")
    }else{
      console.log("MOVIE DOES NOT EXIST")
      setRandom(Math.floor(Math.random() * 100000) + 1)
    }
  }

  return (
    <div className="main">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
          ` <Route
              path='/'
              element={<Landing/>}
              //userID={:username} 
            />
            <Route
              path='/user'
              element={<User user={user}/>}
              //userID={:username} 
            />
            <Route
              path='/movie/:id'
              element={<SingleMovie/>}
              //movieID={:id} (This should NOT be done here and App.JS should be HEAVILY optimized. I.E. move the fetch requests into another component, but NOT IN APPJS)
            />
            <Route
              path='/movielist'
              element={<MoviesList/>}
              //movieID={:id} (This should NOT be done here and App.JS should be HEAVILY optimized. I.E. move the fetch requests into another component, but NOT IN APPJS)
            />
            <Route
              path='/user/:id'
              element={<User/>}
              //userID={:username} 
            />
            <Route
              path='/search'
              element={<SearchResults/>}
              //userID={:userid} 
            />
            <Route
              path='/login'
              element={<Login/>}
            />
            <Route
              path='/register'
              element={<Register/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
