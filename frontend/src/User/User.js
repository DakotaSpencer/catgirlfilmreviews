import React from 'react'
import userdata from '../userdummydata.json'

const User = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <div>
        <h1>User Information</h1>
        
          
        <div>
          <h2>Username</h2>
          <p>{userdata[0].username}</p>
        </div>
        <div>
          <h2>Profile picture</h2>
          <img src={process.env.PUBLIC_URL + '/Images/picture.png'} style={{width:'150px'}}/>
        </div>
        <div>
          <h2>Location</h2>
          <p>{userdata[0].location}</p>
        </div>

        <div>
          <h2>Bio:</h2>
          <p>{userdata[0].bio}</p>
        </div>
      </div>
    </div>
  )
}

export default User