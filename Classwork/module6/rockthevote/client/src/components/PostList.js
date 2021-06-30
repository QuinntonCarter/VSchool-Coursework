import Posts from './Posts.js';

export default function PostList(props){
    const {posts, toggle, setToggle} = props
    
    const btnTxt = !toggle ? 'all' : 'your'

    return(
        <div className='postList'>
            <h3> { btnTxt } posts </h3>
            <h5
                onClick={() => setToggle(prev => !prev)}
            > switch view </h5>
            { !toggle ?
                <>
                    {posts.map(post => <Posts {...post} key={post._id}/>)}
                </>
                :
                <>
                    <p> placeholder for user posts </p>
                </>
            }
        </div>
    )
}