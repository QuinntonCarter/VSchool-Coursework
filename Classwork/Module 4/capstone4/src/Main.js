import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

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

class Main extends Component {
    state = {
        // for setting form back to blank
        location: '',
        // for retrieval of forecast
        locationDetails: {},
        // for viewing of forecast data
        view: false
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
            this.setState({
                // resets form to blank state for *~aesthetics~*
                location: ''
            })
        // translates location for receival by fetch below (changes spaces into +)
        var location = this.state.location.split(' ').join('+');
        // fetches location information w location variable
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyA2PuW8IVNsVkIO3dZwgw82zkc5BRXsCPA`)
        .then(response => response.json())
        .then(data => 
            // uses location data from previous fetch data to find location's current forecast
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.results?.[0]?.geometry?.location?.lat}&lon=${data?.results?.[0]?.geometry?.location?.lng}&units=imperial&exclude=minutely&appid=5ae7b3c76c2e696e51c9f8585a68c324`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    // sets location forecast information to state.locationDetails
                    locationDetails: data,
                    // sets view to true from ternary statement
                    view: true
                }))
        )
    }

    render(){
        // turns temp into var and string for slice manipulation
        var temp = this.state.locationDetails?.main?.temp+'º'
        var humidity = this.state.locationDetails?.main?.humidity+'%'
        var city = this.state.locationDetails.name
        var description = this.state.locationDetails?.weather?.[0]?.description

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
                        <center>
                            <button> Submit </button>
                        </center>
                    </form>
                    <h1 style={{fontSize: '29px'}}> {day} {n} </h1>
                    {/* sets this.state.view to true which displays contained JSX once condition is met */}
                        {this.state.view === true ? 
                            <div>
                                <h1 style={{fontSize: '59px', margin: '0px'}}> {city} </h1>
                                {/* slices temp and readds º for cleaner display */}
                                <h1 style={{fontSize: '129px', margin: '40px'}}> {temp.slice(0,2)+'º'} </h1>
                                <h2 style={{fontSize: '19px'}}> {description} </h2>
                                <h2 style={{fontSize: '19px'}}> Humidity: {humidity} </h2>
                            </div> : ''
                        }
                {console.log(this.state.locationDetails)}
                {/* sends context information for WeeklyDisplay */}
                    <Main value={{}}>
                        {this.props.children}
                    </Main>
            </div>
        )
    }
}

export { Main, Consumer as MainContextConsumer }


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


