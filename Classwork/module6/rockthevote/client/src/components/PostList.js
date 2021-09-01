import Posts from './Posts.js';

export default function PostList(props){
    const { allPosts, posts, toggle, setToggle } = props
    const viewText = toggle === false ? 'all' : 'your'
    const titleTxt = toggle === false ? 'your' : 'all'

    return(
        <div className='postList'>
            {/* style button width */}
            <button title={`switch to ${titleTxt} posts`} onClick={() => setToggle(prevState => !prevState)}> 
                {viewText} posts 
            </button>
            {    toggle ? 
                <>
                    { posts.map(posts => <Posts toggledState={toggle} {...posts} id={posts._id} key={posts._id} />  )}
                </>
                :
                <>
                    { allPosts.map(posts => <Posts {...posts} id={posts._id} key={posts._id} /> )}
                </>
            }
        </div>
    )
}