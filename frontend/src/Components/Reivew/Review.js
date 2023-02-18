import React from 'react'
import Hearts from './Hearts/Hearts'
import "./Review.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Remaininghearts from './Hearts/RemainingHearts';

function Review({review}) {

    const user = {
        pfp: "https://townsquare.media/site/442/files/2018/11/shrek-reboot-oh-no.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
        id: 0,
        username: "ShrekLover526"
    }

    return (
        <div className='review'>
            <div className='review-header flexRow'>
                    {/* TODO redirect to user with id */}
                    <div className='review-user-info flexRow'>
                        <div>
                            <img className='user-pfp' src={user.pfp} alt=''/>
                        </div>
                        
                        <div className='padleft' style={{fontSize:'18px'}}>
                            {user.username}
                        </div>
                    </div>
                        
                    <div className='reviewThumbs'>
                        {/* style to look like not garbage */}
                            <button className='thumbs'><ThumbUpIcon/></button><div className='p-0'>{review.thumbsup}</div>
                            <button className='thumbs'><ThumbDownIcon/></button><div className='p-0'>{review.thumbsdown}</div>
                    </div>
            </div>
            <div className='review-ratings flexRow'>
                <div className='padright padtop hearts'>
                    <Hearts number={review.score}/>
                    <Remaininghearts number={5-review.score} />
                </div>
                <h2 className='padtop'>{review.title}</h2>     
            </div>
            <div className='review-body'>
                <p>{review.body}</p>
            </div>
        </div>
    )
}

export default Review