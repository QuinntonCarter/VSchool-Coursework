import React from 'react'
import BlogData from './BlogData'

function BlogPost(props){
    return(
        <div className='post-container'>
        <h4 className='title'>{props.title}</h4>
        <h4 className='sub'>{props.subTitle}</h4>
        <h3>{props.author} {props.date}</h3>
        </div>
    )
}

export default BlogPost