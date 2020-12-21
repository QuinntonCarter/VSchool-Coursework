import React from 'react';
import { ForecastContextConsumer } from './ForecastContext';

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
    return(
        <ForecastContextConsumer>
        {context =>(
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
    )}
    </ForecastContextConsumer>
    )
}

export default Weekly

// firstMax={context.weeklyDetails?.daily?.[0]?.temp?.max}
//                     firstMin={props.weekly?.daily?.[0]?.temp?.min}
//                     firstHum={props.weekly?.daily?.[0]?.humidity}
//                     firstDesc={props.weekly?.daily?.[0]?.weather?.[0].description}

//                     secMax={props.weekly?.daily?.[1]?.temp?.max}
//                     secMin={props.weekly?.daily?.[1]?.temp?.min}
//                     secHum={props.weekly?.daily?.[1]?.humidity}
//                     secDesc={props.weekly?.daily?.[1]?.weather?.[0].description}

//                     thirdMax={props.weekly?.daily?.[2]?.temp?.max}
//                     thirdMin={props.weekly?.daily?.[2]?.temp?.min}
//                     thirdHum={props.weekly?.daily?.[2]?.humidity}
//                     thirdDesc={props.weekly?.daily?.[2]?.weather?.[0].description}

//                     fourthMax={props.weekly?.daily?.[3]?.temp?.max}
//                     fourthMin={props.weekly?.daily?.[3]?.temp?.min}
//                     fourthHum={props.weekly?.daily?.[3]?.humidity}
//                     fourthDesc={props.weekly?.daily?.[3]?.weather?.[0].description}

//                     fifthMax={props.weekly?.daily?.[4]?.temp?.max}
//                     fifthMin={props.weekly?.daily?.[4]?.temp?.min}
//                     fifthHum={props.weekly?.daily?.[4]?.humidity}
//                     fifthDesc={props.weekly?.daily?.[4]?.weather?.[0].description}

//                     sixthMax={props.weekly?.daily?.[5]?.temp?.max}
//                     sixthMin={props.weekly?.daily?.[5]?.temp?.min}
//                     sixthHum={props.weekly?.daily?.[5]?.humidity}
//                     sixthDesc={props.weekly?.daily?.[5]?.weather?.[0].description}

//                     sevMax={props.weekly?.daily?.[6]?.temp?.max}
//                     sevMin={props.weekly?.daily?.[6]?.temp?.min}
//                     sevHum={props.weekly?.daily?.[6]?.humidity}
//                     sevDesc={props.weekly?.daily?.[6]?.weather?.[0].description}

//                     eighMax={props.weekly?.daily?.[7]?.temp?.max}
//                     eighMin={props.weekly?.daily?.[7]?.temp?.min}
//                     eighHum={props.weekly?.daily?.[7]?.humidity}
//                     eighDesc={props.weekly?.daily?.[7]?.weather?.[0].description}