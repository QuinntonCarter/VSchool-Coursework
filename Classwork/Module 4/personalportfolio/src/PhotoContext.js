import React, { Component } from 'react'

const {Provider, Consumer} = React.createContext()

class PhotoContextProvider extends Component {
    state = {
        photo: './img/butterfly HQ.gif'
            // array of images held in img folder to be selected randomly by a method below..? which returns a selected image from array
    }

    imageSelect = () => {
        // set componentDidMount() here to load/return random image here
        return(
            console.log('issaimage')
        )}


    render(){
        return(
            <Provider value={{image: this.state.photo}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {PhotoContextProvider, Consumer as PhotoContextConsumer}