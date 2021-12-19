import { useContext, useEffect } from 'react';
import { AppContext } from '../components/context/appContext.js';
import { UserContext } from '../components/context/userProvider.js';
import { PostedMood } from '../components/postedMood.js';

// friends' lists
export default function Lists(){
    const {
        getStatus,
        userState: {
            friendPosts
        }
    } = useContext(UserContext);

    useEffect(() => {
        let type = 'friends'
        getStatus(type)
    },[]);
    
    const mappedFriendsMoods = friendPosts.map(post => 
        <PostedMood
            key={post._id}
            id={post._id}
            items={post.items}
        />
    )

    console.log(friendPosts)

    return(
        <div className='container-main' >
            <h1 style={{color: 'gray'}}> Mood lists posted by friends </h1>
            {mappedFriendsMoods}
        </div>
    )
}