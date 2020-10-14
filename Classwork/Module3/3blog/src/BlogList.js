import React from 'react';
import BlogPost from './BlogPost';
import BlogData from './BlogData'

function BlogList(){
    const blogData = BlogData.map(data =>
            <BlogPost 
                title={data.title} 
                subtitle={data.subTitle} 
                author={data.author} 
                date={data.date} 
            /> 
        )
    return (
        <div className='blog-list'>
            {blogData}
            <div className='buttonspace'>
                <button> Older Posts </button>
            </div>
        </div>
    )
}

export default BlogList;