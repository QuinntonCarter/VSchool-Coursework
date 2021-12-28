import React, { useState } from 'react'

// for context
const ForecastContext = React.createContext()
// for emoji/theme npm emojis
const emojis = require('emojis-list')


// *
// **
// ***
// ****
// convert to functional component <----
// convert state to use hooks
function ForecastContextProvider(props) {
// *** BETA ***
    // HOOKS
    // for sending fetch for current
    const [location, setLocation] = useState('')
    // // for fetched current weather data
    const [currentDetails, setCurrentDetails] = useState({})
    // // for fetched weekly weather data
    const [weeklyDetails, setWeeklyDetails] = useState({})
    // // for viewing data when set to true in ternary
    const [view, setView] = useState(false)
    // // for triggering weekly data pull from API
    const [pullWeekly, setPullWeekly] = useState(false)
    // // for pulling location specific image for background
    const [pullImg, setPullImg] = useState(false)

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
        function locationSubmit(e){
            e.preventDefault()
            this.setState({
                location: ''
            })
            setLocation('')    
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
        
    return(
        <div>
            {/* // displays another main */}
            <ForecastContext.Provider value={{
                // methods
                locationSubmit,
                handleChange,
                // state information
                location,
                currentDetails,
                weeklyDetails,
                view
                }}>
                    {props.children}
            </ForecastContext.Provider>
        </div>
    )
}

export { ForecastContextProvider, ForecastContext }