import { useState } from 'react';

export default function CommentComp(props){
    const { comments } = props
    const [toggle, setToggle] = useState(false)

    const commentsMapped = comments.content ?
        <>
            <h6 onClick={() => setToggle(prevState => !prevState)}> no comments yet </h6>
        </>
        :
        comments.map(comment => 
            <div className='commentStyle'>
                <h6> @{comment.comAuth} posted {comment.date.slice(0,10)} around {comment.date.slice(11,16)} </h6>
                {console.log(comment)}
                <p style={{backgroundColor: 'transparent'}}> {comment.content} </p>
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