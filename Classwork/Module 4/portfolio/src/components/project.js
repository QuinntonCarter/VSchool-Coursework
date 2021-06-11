import React from 'react'

export default function Project(props){
    const { title, desc, link, img } = props
    
    return(
    <div className='slide'>
        <img src={img} alt='project preview'/>
        <div className='slideDesc'>
            <h1> {title} </h1>
            <hr/>
            <p className='desc'> {desc} </p>
            <a href={link}> <i className="fas fa-asterisk"> {link}</i> </a>
        </div>
    </div>
    )
}