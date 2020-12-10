import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext();

// change context information to pull data from spotify api using GET and display info // 
class MediaContextProvider extends Component {
    state = {
        artists: '',
        tracks: '',
    }


        render(){
            return (
                <Provider value={{artists: this.state.artists, tracks: this.state.tracks}}>
                    {this.props.children}
                </Provider>
            )
        }

}

export { MediaContextProvider, Consumer as MediaContextConsumer }