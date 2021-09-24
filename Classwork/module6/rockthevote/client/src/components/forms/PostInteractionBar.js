import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserProvider.js';
import CommentComp from '../CommentComp.js';

export default function PostInteractionForm(props){
    const {
        comment,
        votes,
        _id,
        _userId,
        voted
    } = props
    
    const { 
        deletePost,
        submitVote,
        postComment,
        user
    } = useContext(UserContext)
    
    const initInputs = {
        content: '',
        comAuth: `${user.username}`,
        _authId: `${user._id}`,
        date: new Date()
    }

    const [inputs, setInputs] = useState(initInputs)
    const [toggleReply, setToggleReply] = useState(false)

    function handleDelete(id){
        deletePost(id)
        document.location.reload()
    }

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    
    function voteValidation(vote, userId, id, username){
        const hasVoted = voted.includes(username)
        hasVoted ?
        console.log(`Error: you've already voted here`)
        :
        submitVote(vote, userId, id)
    }

    function submitComment(e, postId, textInput){
        e.preventDefault()
        postComment(postId, textInput)
        setInputs(initInputs)
        setToggleReply(false)
    }

    return(
        <div className='interactionStyle'>
            <h4 title='# of votes'>
                <i onClick={() => voteValidation('upvote', _userId, _id, user.username)} title='upvote' className='fas fa-thumbs-up'/>
                {votes}
                <i onClick={() => voteValidation('downvote', _userId, _id, user.username)} title='downvote' className='fas fa-thumbs-down'/>
            </h4>
            <h6 className='comments'> { comment.length } comments </h6>
            { !toggleReply ?
                <h6
                    title='open reply form'
                    onClick={() => setToggleReply(prevState => !prevState)}
                    className='replyBtn'
                    style={{
                        cursor: 'pointer',
                        textDecoration: 'underline'
                }}> reply </h6>
                :
                <div className='commentAreaStyle'>
                    <form>
                        <textarea
                            onChange={handleChange}
                            placeholder={`what's good?`}
                            className='commentArea'
                            name='content'
                            value={inputs.content}
                        />
                        <button
                            onClick={(e) => submitComment(e, _id, inputs)}
                            style={{color: 'rgb(233, 110, 110)'}}
                        > reply </button>
                        <button
                            onClick={
                                () => setToggleReply(prevState => !prevState)
                            }
                        > cancel </button>
                    </form>
                </div>
            }
            { props.userId === user._id ?
                <button
                    onClick={() => handleDelete(_id)}
                    className='deleteBtn'
                > delete </button>
                :
                ''
            }
            <CommentComp
                postId={_id}
                comments={comment}
            />
        </div>
    )
}