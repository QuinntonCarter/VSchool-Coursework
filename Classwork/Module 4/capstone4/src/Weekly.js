import React, { Component } from 'react';

import WeeklyDisplay from './WeeklyDisplay'


class Weekly extends Component{
    state = {
        weekly: {}
    }

    // GET forecast from api
    componentDidMount(){
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.767&lon=-111.8904&units=imperial&exclude=minutely&appid=5ae7b3c76c2e696e51c9f8585a68c324")
        .then(response => response.json())
        .then(data => {
            this.setState({
                weekly: data
            })
        })
    }

    render(){
        return(
            // return 7 day forecast and style here
            <div className='main'>
                <WeeklyDisplay 
                key={this.state.weekly?.current?.dt}

                firstMax={this.state.weekly?.daily?.[0]?.temp?.max}
                firstMin={this.state.weekly?.daily?.[0]?.temp?.min}
                firstHum={this.state.weekly?.daily?.[0]?.humidity}
                firstDesc={this.state.weekly?.daily?.[0]?.weather?.[0].description}

                secMax={this.state.weekly?.daily?.[1]?.temp?.max}
                secMin={this.state.weekly?.daily?.[1]?.temp?.min}
                secHum={this.state.weekly?.daily?.[1]?.humidity}
                secDesc={this.state.weekly?.daily?.[1]?.weather?.[0].description}

                thirdMax={this.state.weekly?.daily?.[2]?.temp?.max}
                thirdMin={this.state.weekly?.daily?.[2]?.temp?.min}
                thirdHum={this.state.weekly?.daily?.[2]?.humidity}
                thirdDesc={this.state.weekly?.daily?.[2]?.weather?.[0].description}

                fourthMax={this.state.weekly?.daily?.[3]?.temp?.max}
                fourthMin={this.state.weekly?.daily?.[3]?.temp?.min}
                fourthHum={this.state.weekly?.daily?.[3]?.humidity}
                fourthDesc={this.state.weekly?.daily?.[3]?.weather?.[0].description}

                fifthMax={this.state.weekly?.daily?.[4]?.temp?.max}
                fifthMin={this.state.weekly?.daily?.[4]?.temp?.min}
                fifthHum={this.state.weekly?.daily?.[4]?.humidity}
                fifthDesc={this.state.weekly?.daily?.[4]?.weather?.[0].description}

                sixthMax={this.state.weekly?.daily?.[5]?.temp?.max}
                sixthMin={this.state.weekly?.daily?.[5]?.temp?.min}
                sixthHum={this.state.weekly?.daily?.[5]?.humidity}
                sixthDesc={this.state.weekly?.daily?.[5]?.weather?.[0].description}

                sevMax={this.state.weekly?.daily?.[6]?.temp?.max}
                sevMin={this.state.weekly?.daily?.[6]?.temp?.min}
                sevHum={this.state.weekly?.daily?.[6]?.humidity}
                sevDesc={this.state.weekly?.daily?.[6]?.weather?.[0].description}

                eighMax={this.state.weekly?.daily?.[7]?.temp?.max}
                eighMin={this.state.weekly?.daily?.[7]?.temp?.min}
                eighHum={this.state.weekly?.daily?.[7]?.humidity}
                eighDesc={this.state.weekly?.daily?.[7]?.weather?.[0].description}
                />
            </div>
        )
    }
}

export default Weekly