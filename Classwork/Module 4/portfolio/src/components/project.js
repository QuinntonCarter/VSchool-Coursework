import React from 'react'

// each project's display blueprint
export default function Project(props){
    const { title, desc, link, img } = props
    
    return(
        // background img could be of project
    <div className='project'>
        <h1> {title} </h1>
        <hr/>
        <img src={img}></img>
        <p className='desc'> {desc} </p>
        <i href={link} className="fas fa-asterisk"> {link} </i>
    </div>
    )
}