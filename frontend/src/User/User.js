import React, { useState, useEffect } from 'react'
import userdata from '../userdummydata.json'
import './user.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moviedata from '../moviedummydata.json'
import MoviesList from '../Components/MoviesList/MoviesList';
import reviews from "../../src/reviewdummydata.json"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Review from '../Components/Reivew/Review'
import {useParams} from 'react-router-dom'

const User = ({user}) => {
  const params = useParams();
  const [userData, setUserData] = useState(null)
  useEffect(()=>{
    if(user){
      setUserData(user)
      console.log(userData)
    }else if(params.id){
      setUserData(params.id)
      console.log(userData)
    }else{
      console.log("user doesnt exist")
    }
    console.log(moviedata)
  });

  return (
    <div className='pagediv'>
      <Container>
        <Row>
          <Col >
            <div className='col-4 userBio text-center'>
              {/* <div className='detail-block center'>
                <h2>User Information</h2>
              </div> */}
              <div className='detail-block padtop'>
                <img src={user.pfp} style={{width:'100px', height:'100px'}} className='user-pfp' alt=''/>
                
                  <p style={{fontSize:'18px'}} className='m-2'>{user.username}</p>
                </div>
              <div className='detail-block'>
                <div><LocationOnIcon/>{userdata[0].location}</div>
              </div>
              <div className='detail-block'>
                <p>{userdata[0].bio}</p>
              </div>
            </div>
            <div className='col-4 userButton text-center rounded'>
              <button className='button'>Edit User Information</button>
            </div>
            
          </Col>
          <Col xs={5}>
            <div className='reviewSection'>
              {reviews.map(review => (
                <Review review={review} />
              ))}
            </div>
            
          </Col>
          <Col xs={4}>
            <MoviesList moviedata={moviedata.results}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default User