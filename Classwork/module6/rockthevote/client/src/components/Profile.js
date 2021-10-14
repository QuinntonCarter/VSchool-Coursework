import { useContext } from 'react';
import { UserContext } from '../context/UserProvider.js';
import Posts from './Posts.js'

export default function Profile(){
    const { user: { username }, user: { memberSince },  posts, comments } = useContext(UserContext)
    // find a way to select last item in array and insert it as arg in this .lastIndexOf()
    const userPostsMapped = posts.map(posts =>
        <div className='profilePosts'>
            <Posts
                {...posts}
                _id={posts._id}
                userId={posts.user}
                key={posts._id}
            />
        </div>
    )

    const userCommentsMapped = comments.map(comment =>
        <div class="comment" style={{display: 'grid', justifySelf: 'center'}}>
            <h5> {comment.date} </h5>
            <p> {comment.content} </p>
        </div>
    )

    return(
        <div>
            <h1> @{ username } </h1>
            <h3> member since: { memberSince.slice(0,10) } </h3>
            <h3> posts: </h3>
                { userPostsMapped }
            {/* will need to create comment component, which maps through and displays comments, may need to add userComments arr to state n map that way */}
            <h3> comments: </h3>
            { userCommentsMapped }
        </div>
    )
}