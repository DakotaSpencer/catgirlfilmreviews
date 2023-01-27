import React, { useEffect } from 'react'
import userdata from '../userdummydata.json'
import './user.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moviedata from '../moviedummydata.json'
import MoviesList from '../MoviesList/MoviesList';
import MovieComponent from '../MovieComponent/MovieComponent';



const User = () => {
  useEffect(()=>{
    console.log(moviedata)
  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className='col-4 userBio'>
              <div className='detail-block'>
                <h1>User Information</h1>
              </div>
              
              <div className='detail-block'>
                <h2>Username</h2>
                <p>{userdata[0].username}</p>
              </div>
              <div className='detail-block'>
                <h2>Profile picture</h2>
                <img src={process.env.PUBLIC_URL + '/Images/picture.png'} style={{width:'150px'}}/>
              </div>
              <div className='detail-block'>
                <h2>Location</h2>
                <p>{userdata[0].location}</p>
              </div>

              <div className='detail-block'>
                <h2>Bio:</h2>
                <p>{userdata[0].bio}</p>
              </div>
            </div>
          </Col>
          <Col xs={6} className='border'>Reviews</Col>
          <Col xs={3} className='border'>
            <MoviesList moviedata={moviedata.results}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default User