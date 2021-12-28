import { useContext, useEffect } from 'react';
import { UserContext } from '../components/context/userProvider.js';
import { PostedMood } from '../components/postedMood.js';
import { PostedList } from '../components/postedList.js';

// friends' posts
export default function Lists(){
    const {
        getPosts,
        getStatus,
        setUserState,
        userState: {
            friendPosts
        },
        userState: {
            friendLists
        },
        userState
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

    const mappedFriendLists = friendLists[0] && friendLists.map(list => 
        <PostedList
            list={list}
            key={list._id}
        />
        )

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
            <div>
            <span className='text-sm text-indigo-300'> {userState.user.friends.length} friend and {friendPosts.length} posted moods </span>
                <br/>
                {friendPosts.length === 0 && <span className='text-sm text-cerise-500'> nothing to display </span>}

                {mappedFriendsMoods}
            </div>
            <div className='pt-3'>
                <span className='text-sm text text-submarine-300'> {userState.user.friends.length} friend and {friendLists.length} posted lists </span>
                <br/>
                {friendLists.length === 0 && <span className='text-sm text-cerise-500'> nothing to display </span>}
                {mappedFriendLists}
            </div>
        </div>
    )
};