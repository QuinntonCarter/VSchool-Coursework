import React, { useContext } from 'react';
import { ForecastContext } from './forecastContext.js';

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

// needs conditional render
function Weekly(){

    const context = useContext(ForecastContext)

    return(
        // return 7 day forecast and style here (pass props for onecall dailies here)
            <div  className='weeklyDisp'>
                {context.view === true ? 
                <table>
                    <thead>
                            <th> </th>
                            <th> Max º </th>
                            <th> Min º </th>
                            <th> Humidity </th>
                            {/* <th> Forecast </th> */}
                    </thead>
                    <tbody>
                        <tr className='firstday'>
                            <td>{n+' '+date}</td>
                            <td>
                                {context.weeklyDetails?.daily?.[0]?.temp?.max+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[0]?.temp?.min+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[0]?.humidity}{`%`}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[0]?.weather?.[0]?.description}
                            </td>
                        </tr>
                        <tr className='secday'>
                        <td>{n+' '+tmrw}</td>
                            <td>
                                {context.weeklyDetails?.daily?.[1]?.temp?.max+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[1]?.temp?.min+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[1]?.humidity}{`%`}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[1]?.weather?.[0]?.description}
                            </td>
                        </tr>
                        <tr className='thirdday'>
                            <td> {n+' '+thirdDay} </td>
                            <td>
                                {context.weeklyDetails?.daily?.[2]?.temp?.max+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[2]?.temp?.min+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[2]?.humidity}{`%`}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[2]?.weather?.[0]?.description}
                            </td>
                        </tr>
                        <tr className='fourthday'>
                            <td> {n+' '+fourthDay} </td>
                            <td>
                                {context.weeklyDetails?.daily?.[3]?.temp?.max+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[3]?.temp?.min+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[3]?.humidity}{`%`}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[3]?.weather?.[0]?.description}
                            </td> 
                        </tr>
                        <tr className='fifthday'>
                            <td> {n+' '+fifthDay} </td>
                            <td>
                                {context.weeklyDetails?.daily?.[4]?.temp?.max+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[4]?.temp?.min+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[4]?.humidity}{`%`}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[4]?.weather?.[0]?.description}
                            </td>
                        </tr>
                        <tr className='sixthday'>
                            <td> {n+' '+sixthDay} </td>
                            <td>
                                {context.weeklyDetails?.daily?.[5]?.temp?.max+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[5]?.temp?.min+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[5]?.humidity}{`%`}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[5]?.weather?.[0]?.description}
                            </td>
                        </tr>
                        <tr className='sevday'>
                            <td> {n+' '+sevDay} </td>
                            <td>
                                {context.weeklyDetails?.daily?.[6]?.temp?.max+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[6]?.temp?.min+'º'}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[6]?.humidity}{`%`}
                            </td>
                            <td>
                                {context.weeklyDetails?.daily?.[6]?.weather?.[0]?.description}
                            </td>
                        </tr>
                    </tbody>
                </table>
    : ''  }
    </div>
    )
}

export default Weekly