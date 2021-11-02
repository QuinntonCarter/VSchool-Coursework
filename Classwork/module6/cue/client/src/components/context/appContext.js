import React, { useState } from 'react';
import axios from 'axios';

// refactor for use with spotify API (not for user information)
const AppContext = React.createContext();

// data.search => is an array of results
function AppContextProvider(props){
    const [searchQuery, setSearchQuery] = useState([])
    const [songDetails, setSongDetails] = useState([])

    // const cueDB = axios.create({})

    function search(query){
        // var songSplit = query.song.split(' ').join('%20');
        var artistSplit = query.artist.split(' ').join('%20');
        // change to both and change search params for song and artist
        axios.get(`https://api.spotify.com/v1/q=name:${artistSplit}&type=artist}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    // // could be used to analyse songs
    // function getDetails(id){
    //     axios.get(`https://api.spotify.com/v1/`)
    //     .then(res => setSongDetails(res.data))
    //     .catch(err => console.log(err))
    // }

    return(
        <AppContext.Provider
        value={{
            search,
            searchQuery,
            setSearchQuery,
            // getDetails,
            songDetails
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext}