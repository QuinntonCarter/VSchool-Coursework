import { useContext } from 'react';
import { UserContext } from '../context/UserProvider.js';
import { Link } from 'react-router-dom';
import PostInteractionForm from './forms/PostInteractionForm.js';

export default function Posts(props){
    const { 
        title, 
        content, 
        imgSrc, 
        id,
        comment,
        posted,
        toggledState
    } = props

    const { deletePost, submitVote } = useContext(UserContext)

    function handleDelete(id){
        deletePost(id)
        window.location.reload()
    }

        // how to submit up or downvote ?
        function handleVote(e){
            e.preventDefault()
            submitVote()
        }

    return(
        <>
            <div className='postStyle'>
                <a title='View full size image' href={ imgSrc } rel='noreferrer' target='_blank'> 
                    <img src={ imgSrc } alt={ imgSrc }/>
                </a>
                    <div className='postDesc'>
                        <h2> { title } <br/>
                            <span className='date'> posted { posted.slice(0,10) } </span> 
                            <span className='date'> @ { posted.slice(11,16) } </span> 
                        </h2>
                        <p> { content } </p>
                        {/* consider moving */}
                        {   toggledState ? 
                            <button
                                title='Delete post'
                                className='deleteBtn'
                                onClick={() => handleDelete(id)}
                            > x </button>
                            :
                            ''
                        }
                    </div>
                    {/* import Comments component and insert here */}
                <PostInteractionForm
                    comment={comment}
                    id={id}
                />
            </div>
        </>
    )
}