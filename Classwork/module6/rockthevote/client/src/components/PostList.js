import React, {  useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserProvider.js';
import Posts from './Posts.js';

export default function PostList(props) {
    const { allPosts } = props
    const { getAllPosts } = useContext(UserContext)
    let initView = allPosts.map(posts => <Posts {...posts} _id={posts._id} userId={posts.user} key={posts._id} />).reverse()

    let unpopularSort = allPosts.sort((a,b) => a.votes - b.votes )
    let unpopularView = unpopularSort.map(posts => <Posts {...posts} _id={posts._id} userId={posts.user} key={posts._id} />)

    let popularSort = allPosts.sort((a,b) => b.votes - a.votes)
    let popularView = popularSort.map(posts => <Posts {...posts} _id={posts._id} userId={posts.user} key={posts._id} />)

    const [ view, setView ] = useState({
        reverse: false,
        popular: true,
        unpopular: false
    })

    function changeClass(option){
        if(option === 'popular'){
            setView({
                reverse: false,
                popular: true,
                unpopular: false
            })
        } if(option === 'unpopular'){
            setView({
                reverse: false,
                popular: false,
                unpopular: true
            })
        } if(option === 'newest'){
            setView({
                reverse: true,
                popular: false,
                unpopular: false
            })
        }
    }

    useEffect(() => {
        getAllPosts()
    }, [])

    
    return(
        <div className='postList'>
            <div className='sortViewBar'>
                <button onClick={() => changeClass('popular')}> popular </button>
                <button onClick={() => changeClass('newest')}> newest </button>
                <button onClick={() => changeClass('unpopular')}> unpopular </button>
            </div>
            { view.reverse ? initView : null }
            { view.popular ? popularView : null }
            { view.unpopular === true ? unpopularView : null }
        </div>
    )
}