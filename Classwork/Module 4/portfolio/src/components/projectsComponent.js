import React from 'react'
import Project from './project.js'
import { projectData } from './projectData.js'

export default function ProjectsComponent(){
    return(
        <>
            <div className='appDisp'>
                {projectData.map(data => 
                    <Project
                    title={data.title}
                    desc={data.description}
                    link={data.link}
                    img={data.imgSrc}
                    />
                )}
                {/* create function or ability to scroll to next div upon i click */}
                <i className="fas fa-chevron-right"></i>
            </div>
    </>
    )
}