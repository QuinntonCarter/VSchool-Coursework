import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserProvider.js';

import PostForm from './forms/PostForm.js';
import PostList from './PostList.js';

export default function Profile(props){
    const {
        user: { username },
        addPost,
        allPosts
    } = useContext(UserContext)

    const [toggle, setToggle] = useState(false)

    return(
        <>
            <h1 className='header'> hello, @{ username } </h1>
            <h3> create a post </h3>
            <PostForm addPost={ addPost }/>
            {/* insert view toggle component here */}
            <PostList
                allPosts={ allPosts }
            />
        </>
    )
}