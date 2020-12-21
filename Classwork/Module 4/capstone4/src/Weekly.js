import React from 'react';

import WeeklyDisplay from './WeeklyDisplay'


function Weekly(props){
    return(
        // return 7 day forecast and style here (pass props for onecall dailies here)
        <div  className='weeklyDisp'>
            <WeeklyDisplay 
                key={props.weekly?.current?.dt}

                firstMax={props.weekly?.daily?.[0]?.temp?.max}
                firstMin={props.weekly?.daily?.[0]?.temp?.min}
                firstHum={props.weekly?.daily?.[0]?.humidity}
                firstDesc={props.weekly?.daily?.[0]?.weather?.[0].description}

                secMax={props.weekly?.daily?.[1]?.temp?.max}
                secMin={props.weekly?.daily?.[1]?.temp?.min}
                secHum={props.weekly?.daily?.[1]?.humidity}
                secDesc={props.weekly?.daily?.[1]?.weather?.[0].description}

                thirdMax={props.weekly?.daily?.[2]?.temp?.max}
                thirdMin={props.weekly?.daily?.[2]?.temp?.min}
                thirdHum={props.weekly?.daily?.[2]?.humidity}
                thirdDesc={props.weekly?.daily?.[2]?.weather?.[0].description}

                fourthMax={props.weekly?.daily?.[3]?.temp?.max}
                fourthMin={props.weekly?.daily?.[3]?.temp?.min}
                fourthHum={props.weekly?.daily?.[3]?.humidity}
                fourthDesc={props.weekly?.daily?.[3]?.weather?.[0].description}

                fifthMax={props.weekly?.daily?.[4]?.temp?.max}
                fifthMin={props.weekly?.daily?.[4]?.temp?.min}
                fifthHum={props.weekly?.daily?.[4]?.humidity}
                fifthDesc={props.weekly?.daily?.[4]?.weather?.[0].description}

                sixthMax={props.weekly?.daily?.[5]?.temp?.max}
                sixthMin={props.weekly?.daily?.[5]?.temp?.min}
                sixthHum={props.weekly?.daily?.[5]?.humidity}
                sixthDesc={props.weekly?.daily?.[5]?.weather?.[0].description}

                sevMax={props.weekly?.daily?.[6]?.temp?.max}
                sevMin={props.weekly?.daily?.[6]?.temp?.min}
                sevHum={props.weekly?.daily?.[6]?.humidity}
                sevDesc={props.weekly?.daily?.[6]?.weather?.[0].description}

                eighMax={props.weekly?.daily?.[7]?.temp?.max}
                eighMin={props.weekly?.daily?.[7]?.temp?.min}
                eighHum={props.weekly?.daily?.[7]?.humidity}
                eighDesc={props.weekly?.daily?.[7]?.weather?.[0].description}
            />
        </div>
    )
}

export default Weekly