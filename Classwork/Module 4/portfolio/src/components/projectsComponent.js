import React from 'react'
import Project from './project.js'
import { projectData } from './projectData.js'

// container for projects

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

            <div className="navDisp">
                <button> 
                    <i className="fas fa-chevron-left"> </i> 
                </button>
                <i id="1" className="material-icons">fiber_manual_record</i>
                <i id="2" className="material-icons">fiber_manual_record</i>
                <i id="3" className="material-icons">fiber_manual_record</i>
                <i id="4" className="material-icons">fiber_manual_record</i>
                <button> 
                    <i className="fas fa-chevron-right"> </i> 
                </button>
            </div>
        </>
    )
}