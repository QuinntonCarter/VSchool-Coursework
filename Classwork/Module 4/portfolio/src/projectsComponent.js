import React from 'react'
import Project from './project.js'

export default function ProjectsComponent(){
    return(
        <>
            <div className='appDisp'>
                <Project/>
                {/* create function or ability to scroll to next div upon i click */}
            <i className="fas fa-chevron-right"></i>
            </div>
    </>
    )
}