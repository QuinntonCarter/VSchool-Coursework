import React, { Component } from 'react'

// for context
const { Provider, Consumer } = React.createContext()


// *
// **
// ***
// ****
// BETA : methods (handlechange + handlesubmit) held here but allowed to be used by form, allow data from form to be exchanged
// ?? ** use context for theme change depending on current weather
// ––consider pushing lat, lon, temp etc to individual arrays n retrieving by index of [0] to avoid fetch retrieving only initial values
// ––also provides contextconsumer for weekly/weeklydisplay
class ForecastContextProvider extends Component {
    // *** BETA ***
    state = {
    // for sending fetch for current
        location: '',
    // for fetching current weather
        currentDetails: {},
        weeklyDetails: {},
    // for viewing data when set to true in ternary
        view: false,
    // for data pulling in this component
        pullWeekly: false,
        pullImg: false
    }

    // *** BETA setup handleChange for passing to Main form
    handleChange = (e) => {
        const {name, value} = e.target
            this.setState({
                [name]: value
            })
    }

    // ** BETA ** move JSON saving, methods, and state information to this component for prop passing and context passing throughout doc **
    // google geolocate key AIzaSyD7DFW5jTwvLp_GDarjWKlyO1T1vDkER-Y, geocoding AIzaSyA2PuW8IVNsVkIO3dZwgw82zkc5BRXsCPA)
        locationSubmit = (e) => {
            e.preventDefault()
            this.setState({
                location: ''
            })    
            // translates location for receival by fetch below (changes spaces into +)
                var location = this.state.location.split(' ').join('+');
                // pulls location based on input field value
                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyA2PuW8IVNsVkIO3dZwgw82zkc5BRXsCPA`)
                .then(response => response.json())
                .then(data =>
                    // pulls current weather w/ input data results lat and lng
                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.results?.[0]?.geometry?.location?.lat}&lon=${data?.results?.[0]?.geometry?.location?.lng}&units=imperial&exclude=minutely&appid=5ae7b3c76c2e696e51c9f8585a68c324`)
                    .then(response => response.json())
                    .then(datatwo => 
                        this.setState({
                        currentDetails: datatwo,
                        view: true,
                        pullWeekly: true
                    })
                    )
                )
        }

        componentDidUpdate(){
            if (this.state.pullWeekly === true){
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.currentDetails?.coord?.lat}&lon=${this.state.currentDetails?.coord?.lon}&units=imperial&exclude=minutely&appid=5ae7b3c76c2e696e51c9f8585a68c324`)
                .then(response => response.json())
                .then(data => 
                    this.setState({
                    weeklyDetails: data,
                    pullWeekly: false,
                    pullImg: true
                })
                )
            // implement logic to pull images local to selected region from teleport api 
                } if (this.state.pullImg === true){
                    fetch(``)
                }
            }

        // ** CLARIFY props will cause issues with rerendering if used to pass w CLASS, correct? 
        // i don't think i'm understanding them correctly **
    render(){
        return(
            <div>
                {/* // displays another main */}
                <Provider value={{
                    // methods
                    locationSubmit: this.locationSubmit,
                    handleChange: this.handleChange,
                    // state information
                    location: this.state.location,
                    currentDetails: this.state.currentDetails,
                    weeklyDetails: this.state.weeklyDetails,
                    view: this.state.view
                    }}>
                        {this.props.children}
                </Provider>
            </div>
        )
    }
}

export { ForecastContextProvider, Consumer as ForecastContextConsumer }