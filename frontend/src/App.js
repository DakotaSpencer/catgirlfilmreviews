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

function App() {
  const {user} = useAuthContext()
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
