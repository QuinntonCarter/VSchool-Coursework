import React from 'react'

export default function Project(props){
    const { title, desc, link, img } = props
    
    return(
        // background img could be of project
    <div className='project'>
        <h1> {title} </h1>
        <hr/>
        <p> {desc} </p>
        <i href={link} class="fas fa-asterisk"> {link} </i>
    </div>
    )
}