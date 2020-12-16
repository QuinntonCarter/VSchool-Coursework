import React from 'react'

function WeeklyDisplay(props){
    return(
        <div className='weeklyDisp'>
            {/* format props: make table to display * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table */}
            <table>
                <thead>
                    <tr> 
                        <th colspan='10'> 7 Day Forecast </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='firstday'>
                        <td>
                            {/* how to pull current weekday name and display above each prediction..? */}
                            {/* how to evenly inline space data each time..? */}
                            {props.firstMax}
                            <br/>
                            {props.firstMin}
                            <br/>
                            {props.firstHum}{`º`}
                            <br/>
                            {props.firstDesc}
                        </td>
                    </tr>
                    <tr className='secday'>
                        <td>
                            {props.secMax}
                            <br/>
                            {props.secMin}
                            <br/>
                            {props.secHum}{`º`}
                            <br/>
                            {props.secDesc}
                        </td>
                    </tr>
                    <tr className='thirdday'>
                        <td>
                            {props.thirdMax}
                            <br/>
                            {props.thirdMin}
                            <br/>
                            {props.thirdHum}{`º`}
                            <br/>
                            {props.thirdDesc}
                        </td>
                    </tr>
                    <tr className='fourthday'>
                        <td>
                            {props.fourthMax}
                            <br/>
                            {props.fourthMin}
                            <br/>
                            {props.fourthHum}{`º`}
                            <br/>
                            {props.fourthDesc}
                        </td> 
                    </tr>
                    <tr className='fifthday'>
                        <td>
                            {props.fifthMax}
                            <br/>
                            {props.fifthMin}
                            <br/>
                            {props.fifthHum}
                            <br/>
                            {props.fifthDesc}
                        </td>
                    </tr>
                    <tr className='sixthday'>
                        <td>
                            {props.sixthMax}
                            <br/>
                            {props.sixthMin}
                            <br/>
                            {props.sixthHum}{`º`}
                            <br/>
                            {props.sixthDesc}
                        </td>
                    </tr>
                    <tr className='sevday'>
                        <td>
                            {props.sevMax}
                            <br/>
                            {props.sevMin}
                            <br/>
                            {props.sevHum}{`º`}
                            <br/>
                            {props.sevDesc}
                        </td>
                    </tr>
                    <tr className='eigday'>
                        <td>
                            {props.eighMax}
                            <br/>
                            {props.eighMin}
                            <br/>
                            {props.eighHum}
                            <br/>
                            {props.eighDesc}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default WeeklyDisplay