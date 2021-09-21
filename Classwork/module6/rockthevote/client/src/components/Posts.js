import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PostInteractionBar from './forms/PostInteractionBar.js';

export default function Posts(props){
    const { 
        user,
        userString,
        votedUsers,
        title, 
        content, 
        imgSrc, 
        comment,
        posted,
        votes,
        id,
        toggledState
    } = props

    return(
        <>
            <div className='postStyle'>
                <a title='View full size image' href={ imgSrc } rel='noreferrer' target='_blank'> 
                    <img src={ imgSrc } alt={ imgSrc }/>
                </a>
                    <div className='postDesc'>
                        <Link to={`/posts/${id}`}
                            style={{color: 'rgb(233, 110, 110)', fontSize: '12px'}}>
                            <h3> { title } <br/>
                                <span className='date'> {`>>${userString}`} on { posted.slice(0,10) } </span> 
                                <span className='date'> @ { posted.slice(11,16) } </span> 
                            </h3>
                        </Link>
                        {/* fix so p content doesn't overflow off the page */}
                        <p> { content } </p>
                    </div>
                <PostInteractionBar
                    toggledState={toggledState}
                    userPost={user}
                    votes={votes}
                    voted={votedUsers}
                    comment={comment}
                    id={id}
                    userString={userString}
                />
                {/* import Comments component and insert here */}
            </div>
        </>
    )
}