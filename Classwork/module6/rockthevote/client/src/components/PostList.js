import { useState } from 'react';
import Posts from './Posts.js';

export default function PostList(props){
    const { allPosts } = props

    // implement sort toggle, popularity(votes)
    const [ sortToggle, setSortToggle ] = useState('reverse')

    // default post view is .reverse()
    function changeSort(sortOpt){

    }
    
    return(
        <div className='postList'>
            { allPosts.map(posts => <Posts {...posts} _id={posts._id} userId={posts.user} key={posts._id} />).reverse() }
        </div>
    )
}