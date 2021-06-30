import { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider.js';

import PostForm from './forms/PostForm.js';
import PostList from './PostList.js';

export default function Profile(props){
    const {
        user: {username},
        addPost,
        posts
    } = useContext(UserContext)

    // for toggling between user posts and all posts from post list, passed as props
    const [toggle, setToggle] = useState(false)
    // passed back from postlist: conditionally depending on toggle's state

    return(
        <div>
            <h1 className='header'> hello, @{ username } </h1>
            <h3> create a post </h3>
            <PostForm addPost={ addPost }/>
            <PostList 
                toggle={toggle}
                setToggle={ setToggle }
                posts={ posts }
            />
        </div>
    )
}