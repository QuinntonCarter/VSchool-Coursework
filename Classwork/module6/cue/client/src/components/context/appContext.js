import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { spotifyUser } from '../spotify.js';

// refactor for use with spotify API (not for user information)
export const AppContext = React.createContext();

export default function AppContextProvider(props){
    // will be sent to search.js and used in view
    const [searchQuery, setSearchQuery] = useState([]);
    const [songDetails, setSongDetails] = useState([]);


    function searchByArtist(input){
        var querySplit = input.query.split(' ').join('%20');
        var artistSplit = input.artist.split(' ').join('%20');
        spotifyUser.get(`/search?q=artist:${artistSplit}&type=${input.type}&name=${querySplit}`)
        .then(res => console.log(res.data))
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
            searchByArtist,
            searchQuery,
            setSearchQuery,
            songDetails
        }}>
            {props.children}
        </AppContext.Provider>
    )
}