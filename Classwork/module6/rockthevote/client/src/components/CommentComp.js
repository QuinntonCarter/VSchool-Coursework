import { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider.js';

export default function CommentComp(props){
    const { comments, postId } = props
    const [toggle, setToggle] = useState(false)
    const commTitle = comments.length > 0 ? `click to view ${comments.length} comments` : ''

    const { deleteComment, user } = useContext(UserContext)

    function validateDeletion(postId, commId, userId, authId){
        userId !== authId ?
        console.log(`Error: cannot delete, this isn't your comment`)
    :
        deleteComment(postId, commId)
    }

    const commentsMapped = comments.map(comment => 
            <div className='commentStyle'>
                <h6> @{comment.comAuth} posted {comment.date.slice(0,10)} around {comment.date.slice(11,16)} </h6>
                {console.log(comment)}
                <p style={{backgroundColor: 'transparent', color: 'rgb(59, 59, 59)'}}> {comment.content} </p>
                {comment._authId !== user._id ?
                    ''
                :
                <button
                    onClick={() => validateDeletion(postId, comment._id)}
                    className='deleteBtn'
                > x </button>}
            </div>)

    return(
        <div title={commTitle} className='commentContainer'>
            {toggle ?
                <div className='commentStyle'>
                    {commentsMapped}
                    { comments[0] ?
                        <button onClick={() => setToggle(prevState => !prevState)}> close </button>
                    :
                        ''
                    }
                </div>
                :
                <div className='commentStyle'>
                    { comments.length > 0 ?
                        <h6 onClick={() => setToggle(prevState => !prevState)}
                        style={{backgroundColor: 'transparent'}}> show comments </h6>
                        :
                        <h6 style={{backgroundColor: 'transparent'}}> no comments </h6>
                    }
                </div>
            }
        </div>
    )
}