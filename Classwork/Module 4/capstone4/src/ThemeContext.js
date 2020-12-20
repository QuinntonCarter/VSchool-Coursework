import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: {},
        lat: {},
        lon: {}
    }
    
    // reads current forecast from API ( beta: setup for long lat pull from google api then insert into 
    // google geolocate key AIzaSyD7DFW5jTwvLp_GDarjWKlyO1T1vDkER-Y, geocoding AIzaSyA2PuW8IVNsVkIO3dZwgw82zkc5BRXsCPA)
    componentDidMount(){
        // send FORM data here to fill address portion of fetch for return
        // redo first fetch to accept form data
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=salt+lake+city=&key=AIzaSyA2PuW8IVNsVkIO3dZwgw82zkc5BRXsCPA')
        .then(response => response.json())
        .then(data => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data?.results?.[0]?.geometry?.location?.lat}&lon=${data?.results?.[0]?.geometry?.location?.lng}&appid=5ae7b3c76c2e696e51c9f8585a68c324`)
            .then(response => response.json())
            .then(datatwo => {
                this.setState({
                    theme: datatwo
                })
            })
        })
    }
    

    render(){
        return(
        <div>
            <Provider value={{theme: this.state.theme}}>
                {this.props.children}
            </Provider>
        </div>
        )
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }

    // scraps             
        // fetch("https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=5ae7b3c76c2e696e51c9f8585a68c324")
        // beta
        //  use backtics and insert long lat into fetch for user location
        // fetch("api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API}")
        // .then(response => response.json())
        // .then(data => {
        // this.setState({
        //     theme: data?.weather?.[0]?.description
        // })})