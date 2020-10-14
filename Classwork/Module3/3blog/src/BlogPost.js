import React from 'react'


function BlogPost(props){
    return (
        <div className='post-container'>
            <h1 className='title'> {props.title} </h1>
            <h2 className='sub'> {props.subTitle} </h2>
            <h3 className='credit-date'> {props.author} {props.date} </h3>
        </div>
    )
}

export default BlogPost