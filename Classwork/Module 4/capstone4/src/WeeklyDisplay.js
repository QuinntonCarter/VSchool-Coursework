import React from 'react'

const d = new Date()
const date = d.getDate()
const tmrw = d.getDate()+1
const thirdDay = d.getDate()+2
const fourthDay = d.getDate()+3
const fifthDay = d.getDate()+4
const sixthDay = d.getDate()+5
const sevDay = d.getDate()+6
var month = [];
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

function WeeklyDisplay(props){
    return(
        <div className='weeklyDisp'>
            {/* format props: make table to display * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table */}
            <table>
                <thead>
                        {/* <th> </th>
                        <th> 7 Day </th>
                        <th> Forecast </th> */}
                </thead>
                <tbody>
                    <tr className='firstday'>
                        <td>{n+' '+date}</td>
                        <td>
                            {props.firstMax}
                        </td>
                        <td>
                            {props.firstMin}
                        </td>
                        <td>
                            {props.firstHum}{`%`}
                        </td>
                        <td>
                            {props.firstDesc}
                        </td>
                    </tr>
                    <tr className='secday'>
                    <td>{n+' '+tmrw}</td>
                        <td>
                            {props.secMax}
                        </td>
                        <td>
                            {props.secMin}
                        </td>
                        <td>
                            {props.secHum}{`%`}
                        </td>
                        <td>
                            {props.secDesc}
                        </td>
                    </tr>
                    <tr className='thirdday'>
                        <td> {n+' '+thirdDay} </td>
                        <td>
                            {props.thirdMax}
                        </td>
                        <td>
                            {props.thirdMin}
                        </td>
                        <td>
                            {props.thirdHum}{`%`}
                        </td>
                        <td>
                            {props.thirdDesc}
                        </td>
                    </tr>
                    <tr className='fourthday'>
                        <td> {n+' '+fourthDay} </td>
                        <td>
                            {props.fourthMax}
                        </td>
                        <td>
                            {props.fourthMin}
                        </td>
                        <td>
                            {props.fourthHum}{`%`}
                        </td>
                        <td>
                            {props.fourthDesc}
                        </td> 
                    </tr>
                    <tr className='fifthday'>
                        <td> {n+' '+fifthDay} </td>
                        <td>
                            {props.fifthMax}
                        </td>
                        <td>
                            {props.fifthMin}
                        </td>
                        <td>
                            {props.fifthHum}{`%`}
                        </td>
                        <td>
                            {props.fifthDesc}
                        </td>
                    </tr>
                    <tr className='sixthday'>
                        <td> {n+' '+sixthDay} </td>
                        <td>
                            {props.sixthMax}
                        </td>
                        <td>
                            {props.sixthMin}
                        </td>
                        <td>
                            {props.sixthHum}{`%`}
                        </td>
                        <td>
                            {props.sixthDesc}
                        </td>
                    </tr>
                    <tr className='sevday'>
                        <td> {n+' '+sevDay} </td>
                        <td>
                            {props.sevMax}
                        </td>
                        <td>
                            {props.sevMin}
                        </td>
                        <td>
                            {props.sevHum}{`%`}
                        </td>
                        <td>
                            {props.sevDesc}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default WeeklyDisplay