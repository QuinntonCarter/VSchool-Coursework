import React from 'react';

import { PhotoContextConsumer } from  './PhotoContext'

function PhotoViewer(){
    return(
        <div className='photoviewer'>
            {/* <PhotoContextConsumer>
                {context => ( */}
                images go here
                {/* )} */}
            {/* </PhotoContextConsumer> */}
        </div>
    )
}

export default PhotoViewer