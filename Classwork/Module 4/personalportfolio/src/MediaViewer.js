// change to mediaviewer for spotify recent artist data // 

import React from 'react';
import { MediaContextConsumer } from './MediaContext'
import './index.css'

function MediaViewer(){
    return(
        <MediaContextConsumer>
            {context => (
                <div className='window'>
                    <h5> {`${context.now}`} </h5>
                    <h5> {`${context.recent}`} </h5>
                </div>
            )}
        </MediaContextConsumer>
    )
}

export default MediaViewer