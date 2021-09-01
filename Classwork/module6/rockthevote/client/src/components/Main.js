import { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider.js';

import PostForm from './forms/PostForm.js';
import PostList from './PostList.js';

export default function Profile(props){
    const {
        user: { username },
        addPost,
        posts,
        allPosts
    } = useContext(UserContext)

    const [toggle, setToggle] = useState(false)

    return(
        <>
            <h1 className='header'> hello, @{ username } </h1>
            <h3> create a post </h3>
            <PostForm addPost={ addPost }/>
            <PostList
                toggle={ toggle }
                setToggle={ setToggle }
                allPosts={ allPosts }
                posts={ posts }
            />
        </>
    )
}