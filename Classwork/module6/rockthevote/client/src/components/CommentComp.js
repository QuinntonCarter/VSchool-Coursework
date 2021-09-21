import { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider.js';

export default function CommentComp(props){
    const { comments, postId } = props
    const [toggle, setToggle] = useState(false)

    const { deleteComment } = useContext(UserContext)

    const commentsMapped = comments.content ?
        <>
            <h6 onClick={() => setToggle(prevState => !prevState)}> no comments yet </h6>
        </>
        :
        comments.map(comment => 
            <div className='commentStyle'>
                <h6> @{comment.comAuth} posted {comment.date.slice(0,10)} around {comment.date.slice(11,16)} </h6>
                {console.log(comment)}
                <p style={{backgroundColor: 'transparent', color: 'rgb(59, 59, 59)'}}> {comment.content} </p>
                <button
                    onClick={() => deleteComment(comment._id)}
                    className='deleteBtn'
                > x </button>
            </div>)

    return(
        <div title={`click to view ${comments.length} comments`} className='commentContainer'>
            {toggle ?
                <div className='commentStyle'>
                    {commentsMapped}
                    <button onClick={() => setToggle(prevState => !prevState)}> close </button>
                </div>
                :
                <div className='commentStyle'>
                    <h6 onClick={() => setToggle(prevState => !prevState)} style={{backgroundColor: 'transparent'}}> show comments </h6>
                </div>
            }
        </div>
    )
}