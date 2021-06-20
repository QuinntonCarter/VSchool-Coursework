import React from 'react'

export default function Project(props){
    const { title, desc, link, img } = props
    
    return(
    <div className='slide'>
        <img src={img} alt='project preview'/>
        <div className='slideDesc'>
            <a href={link} className='title'> {title} </a>
            <p className='desc'> {desc} </p>
        </div>
    </div>
    )
}