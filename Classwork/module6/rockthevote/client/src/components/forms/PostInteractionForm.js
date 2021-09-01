import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider.js';

// a bar that holds interactive elements for post

export default function PostInteractionForm(props){
    const { comment, id } = props
    // import id for postdelete
    const [toggle, setToggle] = useState(false)
    const { submitVote, posts, allPosts } = useContext(UserContext)

    // how to submit up or downvote ?
        function handleVote(e){
            e.preventDefault()
            submitVote()
        }
        

    return(
        <div className='interactionStyle'>
            <h4 style={{backgroundColor: 'transparent'}} title='# of votes'>
                <i onClick={ handleVote } title='upvote' className='fas fa-thumbs-up'/>
                <i onClick={ handleVote } title='downvote' className='fas fa-thumbs-down'/>
            </h4>
            <h6 className='comments'> { comment.length } comments </h6>
            <h6> 
                <Link style={{
                    color: 'rgb(255, 155, 155)',
                    }} to={`/posts/${id}`}
                > view full post 
                </Link>
            </h6>
            { !toggle ?
            // figure out how to fix styling so it doesn't break on toggle open
                <h6
                    title='open reply'
                    onClick={() => setToggle(prevState => !prevState)}
                    className='replyBtn'
                    style={{
                        cursor: 'pointer',
                        color: 'rgb(255, 155, 155)',
                        textDecoration: 'underline'
                    }}> reply </h6>
                :
                <div className='commentAreaStyle'>
                    <textarea className='commentArea'/>
                    <button> reply </button>
                    <button onClick={() => setToggle(prevState => !prevState)}> cancel </button>
                </div>
            }
        </div>
    )
}