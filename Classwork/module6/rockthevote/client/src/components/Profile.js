import { useContext } from 'react';
import { UserContext } from '../context/UserProvider.js';
import Posts from './Posts.js'

export default function Profile(props){
    const { user: { username }, posts } = useContext(UserContext)
    // find a way to select last item in array and insert it as arg in this .lastIndexOf()
    const recentPost = posts[0]

    return(
        <div>
            <h1> @{username} </h1>
            {/* bring in "member since date" */}
            <h3> member since: </h3>
            <h3> latest post:
                {/* consider making this a Link that got to post at id of 0 */}
                <div className='latestPost'> { recentPost } </div>
            </h3>
            {/* will need to create comment component, which maps through and displays comments, may need to add userComments arr to state n map that way */}
            <h3> comments: {}  </h3>
        </div>
    )
}