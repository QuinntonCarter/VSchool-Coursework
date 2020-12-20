import React, { Component } from 'react'

import MainLocationDetails from './MainLocationDetails'

// for date retrieval and display
var d = new Date()
var day = d.getDate()
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

// to replace spaces with +
// var replaced = str.split(' ').join('+');

class Main extends Component {
    state = {
        location: ''
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    // submits form data to state
    locationSubmit = (e) => {
        e.preventDefault()
            this.setState(prevState => ({
                location: prevState.location
            })
        )
    }

    render(){
        const location = this.state.location.split(' ').join('+')
        return(
            <div className='main'>
                <form onSubmit={this.locationSubmit}>
                    <input 
                    placeholder='Type Location Here'
                    name='location'
                    value={this.state.location}
                    type='text' 
                    style={{margin: '10px'}}
                    onChange={this.handleChange}
                    />
                    <button> Submit </button>
                </form>
                <MainLocationDetails
                location = {location}
                />
            </div>
        )
    }
}

export default Main


// scraps from first setup
// * * * * * * * * * * * //
    // geocode catch w key
    //     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address`${form_data_placeholder}`=&key=AIzaSyA2PuW8IVNsVkIO3dZwgw82zkc5BRXsCPA`)


    // ORIGINAL
    // // api GET for weather//
    // componentDidMount(){
    //     fetch("https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=5ae7b3c76c2e696e51c9f8585a68c324")
    //     // one call daily
    //     // fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.767&lon=-111.8904&exclude=minutely&appid=5ae7b3c76c2e696e51c9f8585a68c324")
    //     .then(response => response.json())
    //     .then(data => {
            
    //     })
    // }



                            {/* for debugging */}
                            {/* {console.log(context.theme)} */}
                            {/*  */}
                                {/* <h1 style={{padding: '15px'}}> {day} {n} </h1>
                                <h2 className='place'> {this.state.daily.name} </h2>
                                <h1 className='temp'> {temp}{`º`} </h1> */}
                                {/* ?. checks  */}
                                {/* <h3> {this.state.daily?.weather?.[0]?.description} </h3>
                                <h4>{`humidity`} {this.state.daily?.main?.humidity}{`%`} </h4> */}


