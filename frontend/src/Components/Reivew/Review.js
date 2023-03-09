import React from 'react'
import Hearts from './Hearts/Hearts'
import "./Review.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Remaininghearts from './Hearts/RemainingHearts';

function Review({review}) {

    return (
        <div className='review'>
            <div className='review-header flexRow'>
                    {/* TODO redirect to user with id */}
                    <div className='review-user-info flexRow'>
                        <div>
                            <img className='user-pfp' src={review.userPfp || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.vhAkO06flxugeI3pnGjYQgHaHa%26pid%3DApi&f=1&ipt=82e3bceecc2b49db617ec3bcad32b707a34574a84204d05a8bbc2384556a52eb&ipo=images"} alt=''/>
                        </div>
                        
                        <div className='padleft' style={{fontSize:'14px'}}>
                            {review.userName}
                        </div>
                    </div>
                        
                    <div className='reviewThumbs'>
                        {/* style to look like not garbage */}
                            <button className='thumbs'><ThumbUpIcon/></button><div className='p-0'>{review.upVotes}</div>
                            <button className='thumbs'><ThumbDownIcon/></button><div className='p-0'>{review.downVotes}</div>
                    </div>
            </div>
            <div className='review-ratings flexRow'>
                <h2 className=''>{review.reviewTitle}</h2>  
                <div className='padright  hearts'>
                    <Hearts number={review.reviewScore}/>
                    <Remaininghearts number={5-review.score} />
                </div>
            </div>
            <div className='review-body'>
                <p>{review.reviewBody}</p>
            </div>
        </div>
    )
}

export default Review