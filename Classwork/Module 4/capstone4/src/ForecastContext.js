import React from 'react'

// for context
const { Provider, Consumer } = React.createContext()
// for emoji/theme npm emojis
const emojis = require('emojis-list')


// *
// **
// ***
// ****
// convert to functional component <----
// convert state to use hooks
function ForecastContextProvider() {
    state = {
        location: '',
        currentDetails: {},
        weeklyDetails: {},
        view: false,
    // for data pulling in this component
        pullWeekly: false,
        pullImg: false
    }

    // *** BETA ***
    // for sending fetch for current
    // const {location, setLocation} = useState('')
    // // for fetched current weather data
    // const {currentLocation, setCurrentLocation} = useState({})
    // // for fetched weekly weather data
    // const {weeklyDetails, setWeeklyDetails} = useState({})
    // // for viewing data when set to true in ternary
    // const {view, setView} = useState(false)
    // // for triggering weekly data pull from API
    // const {pullWeekly, setPullWeekly} = useState(false)
    // // for pulling location specific image for background
    // const {pullImg, setPullImg} = useState(false)

    // *** BETA setup handleChange for passing to Main form
    function handleChange(e){
        const {name, value} = e.target
            this.setState({
                [name]: value
            })
    }

    // ** BETA ** move JSON saving, methods, and state information to this component for prop passing and context passing throughout doc **
    // google geolocate key AIzaSyD7DFW5jTwvLp_GDarjWKlyO1T1vDkER-Y, geocoding AIzaSyA2PuW8IVNsVkIO3dZwgw82zkc5BRXsCPA)
    // ***** convert w hook syntax
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
                // } if (this.state.pullImg === true){
                // var location = this.state.location.split(' ').join('-');
                //     fetch(`https://api.teleport.org/api/urban_areas/slug:${location}/images/`)
                //     .then(response => response.json())
                //     .then(data =>
                //         console.log(data))
                // }
            }
        }

        // ** CLARIFY props will cause issues with rerendering if used to pass w CLASS, correct? 
        // i don't think i'm understanding them correctly **
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

export { ForecastContextProvider, Consumer as ForecastContextConsumer }