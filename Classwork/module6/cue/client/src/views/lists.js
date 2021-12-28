import { useContext, useEffect } from 'react';
import { UserContext } from '../components/context/userProvider.js';
import { PostedMood } from '../components/postedMood.js';

// friends' posts
export default function Lists(){
    const {
        getPosts,
        getStatus,
        setUserState,
        userState: {
            friendPosts
        }
    } = useContext(UserContext);

    const mappedFriendsMoods = friendPosts && friendPosts.map(post => 
        <>
            <h3 className='text-sm text-indigo-500'> {post.userString}'s mood
                {post.timeline === 'short_term' && ` these past 30 days`}
                {post.timeline === 'medium_term' && ` these past 6 months`}
                {post.timeline === 'long_term' && ` the past year`} 
            </h3>
            <PostedMood
                key={post._id}
                id={post._id}
                items={post.items}
            />
        </>
    );

    useEffect(() => {
        getStatus('friends')
        .then(res => setUserState(prevState => ({
                ...prevState,
                friendPosts: res
            }))
        )
        getPosts('friends')
        .then(res => setUserState(prevState => ({
            ...prevState,
            friendLists: res
        })))
    },[])

    return(
        <div className='container-main'>
            <h1 style={{color: 'gray'}}> Mood lists posted by friends </h1>
                {mappedFriendsMoods}
        </div>
    )
};