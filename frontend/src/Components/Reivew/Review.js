import React from 'react'
import Hearts from './Hearts/Hearts'
import "./Review.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Review({review}) {

    const user = {
        pfp: "https://townsquare.media/site/442/files/2018/11/shrek-reboot-oh-no.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
        id: 0,
        username: "ShrekLover526"
    }

    return (
        <div className='review'>
            <div className='review-header'>
                    {/* TODO redirect to user with id */}
                    <div className='review-account'>
                        <img className='user-pfp' src={user.pfp} />
                        <div className='padded'>
                            <h2>{review.title}</h2>
                            <div className=''>
                                <a>{user.username}</a>
                                {/* <div></div> */}
                                <Hearts number={review.score}/>
                            </div>
                        </div>
                    </div>
                    <div className='review-account'>
                        {/* style to look like not garbage */}
                        <code><button><ThumbUpIcon/></button></code><p>{review.thumbsup}</p>
                        <code><button><ThumbDownIcon/></button></code><p>{review.thumbsdown}</p>
                    </div>
                    
                
            </div>
            <div className='review-body'>
                <p>{review.body}</p>
            </div>
        </div>
    )
}

export default Review