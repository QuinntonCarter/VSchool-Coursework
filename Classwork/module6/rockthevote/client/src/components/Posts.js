import { Link } from 'react-router-dom';
import PostInteractionBar from './forms/PostInteractionBar.js';

export default function Posts(props){
    const {
        userId,
        userString,
        votedUsers,
        title, 
        content, 
        imgSrc, 
        comment,
        posted,
        votes,
        _id
    } = props

    // const uploaded = 

    return(
        <>
            <div className='postStyle'>
                <a title='View full size image' href={ imgSrc } rel='noreferrer' target='_blank'> 
                    <img src={ imgSrc } alt={ imgSrc }/>
                </a>
                    <div className='postDesc'>
                        <Link to={`/posts/${_id}`}
                            style={{color: 'rgb(233, 110, 110)', fontSize: '12px'}}>
                            <h3> { title } <br/>
                                <span className='date'> {`>>${userString}`} on { posted.slice(0,10) } </span> 
                                <span className='date'> @ { posted.slice(11,16) } </span> 
                            </h3>
                        </Link>
                        <p> { content } </p>
                    </div>
                <PostInteractionBar
                    votes={votes}
                    voted={votedUsers}
                    comment={comment}
                    _id={_id}
                    _userId={userId}
                    userString={userString}
                />
            </div>
        </>
    )
}