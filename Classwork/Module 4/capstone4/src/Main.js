import React from 'react'

import { ThemeContextConsumer } from './ThemeContext'

// for date retrieval and display
var d = new Date()
var day = d.getDay()
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];

function Main(){
    return(
        <div className='main'>
            {/* <ThemeContextConsumer> */}
                {/* {context =>( */}
                    <div>
                        <h1 style={{textAlign: 'left', padding: '15px', fontSize: '72px'}}> {day} </h1>
                        <h2 style={{fontSize: '35px'}}> {n} </h2>
                    </div>
                {/* )} */}
            {/* </ThemeContextConsumer> */}
        </div>
    )
}

export default Main