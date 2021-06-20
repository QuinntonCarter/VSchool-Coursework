import React from 'react'
import Project from './project.js'
import { projectData } from './projectData.js'

export default function ProjectsComponent(){

    return(
        <>
        <div className='slideContainer'>
                {projectData.map(data => 
                    <Project
                        title={data.title}
                        desc={data.description}
                        link={data.link}
                        img={data.imgSrc}
                        key={data.link}
                    />
                )}
            </div>
        </>
    )
}