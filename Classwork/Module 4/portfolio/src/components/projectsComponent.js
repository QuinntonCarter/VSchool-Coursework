import React from 'react'
import Project from './project.js'
import { projectData } from './projectData.js'

// container for projects

export default function ProjectsComponent(){

    function scroll(n){
        console.log(n)
    }

    return(
        <>
            <div className='appDisp'>

                {projectData.map(data => 
                    <Project
                        title={data.title}
                        desc={data.description}
                        link={data.link}
                        img={data.imgSrc}
                        key={data.link}
                    />
                )}

            {/* project navigation */}

            </div>

            <div className="navDisp">
                <button onClick={scroll(-1)}> 
                    <i className="fas fa-chevron-left"> </i> 
                </button>
                <i id="1" className="material-icons">fiber_manual_record</i>
                <i id="2" className="material-icons">fiber_manual_record</i>
                <i id="3" className="material-icons">fiber_manual_record</i>
                <i id="4" className="material-icons">fiber_manual_record</i>
                <button onClick={scroll(1)}> 
                    <i className="fas fa-chevron-right"> </i> 
                </button>
            </div>
        </>
    )
}