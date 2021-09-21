import { useState } from 'react';
import Posts from './Posts.js';

export default function PostList(props){
    const { allPosts, posts, toggle, setToggle } = props
    const viewText = toggle === false ? 'all' : 'your'
    const titleTxt = toggle === false ? 'your' : 'all'

    // implement sort toggle, popularity(votes)
    const [ sortToggle, setSortToggle ] = useState('reverse')

    // default post view is .reverse()
    function changeSort(sortOpt){

    }
    
    return(
        <div className='postList'>
            {/* style button width */}
            <button
                style={{cursor: 'pointer'}}
                title={`switch to ${titleTxt} posts`}
                onClick={() => setToggle(prevState => !prevState)}>
                {viewText} posts 
            </button>
            {toggle ?
                <>
                    { posts.map(posts => <Posts toggledState={toggle} {...posts} id={posts._id} key={posts._id} />).reverse() }
                </>
                :
                <>
                    { allPosts.map(posts => <Posts {...posts} id={posts._id} key={posts._id} />).reverse() }
                </>
            }
        </div>
    )
}