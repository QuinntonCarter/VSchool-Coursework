import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { accessToken } from '../spotify.js';
import { UserContext } from './userProvider.js';

export const AppContext = React.createContext();

export default function AppContextProvider(props){
    const spotifyUserAPI = axios.create();
    spotifyUserAPI.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${accessToken}`
        config.baseURL = 'https://api.spotify.com/v1'
        return config
    });
    const {
        userAxios,
        spotifyUser : {
            id
        }
    } = useContext(UserContext)

    const [ monthlyArtists, setWeeklyArtists ] = useState({});
    const [ monthlyTracks, setWeeklyTracks ] = useState({});
    const [ found, setFound ] = useState([]);
    // for analysis of playlist feel **
    const [ playlists, setPlaylists ] = useState([]);
    const [ playlistTracks, setPlaylistTracks ] = useState([]);
    const [ selectedItem, setSelectedItem ] = useState()

    function search(inputs, type){
        let parseInputs = inputs.split(' ').join('_')
        userAxios.get(`/app/users`, {
            params: {
                username: parseInputs,
                type: type
            }
        })
        .then(res => setFound(res.data))
        .catch(err => console.log(err))
    }

    function getCurrentUserPlaylists(){
        spotifyUserAPI.get(`/users/${id}/playlists`,{
            params: {
                limit: 50
            }
        })
        .then(res => setPlaylists(res.data.items))
        .catch(err => console.log(err))
    }

    // for finding overall playlist analysis data; id = playlistId **
    function getPlaylistTracks(id){
        spotifyUserAPI.get(`/playlists/${id}/tracks`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    console.log(playlists)

    useEffect(() => {
        function getCurrentUserTop(type, limit, time_range){
            spotifyUserAPI.get(`/me/top/${type}`,{
            params: {
                limit: limit,
                time_range: time_range
            }
        })
        .then(res => setWeeklyArtists(res.data))
        .catch(err => console.log(err))
        }
        // * for testing
        getCurrentUserPlaylists()
        // 
        getCurrentUserTop('artists', 5, 'short_term')
    },[])

    useEffect(() => {
        function getCurrentUserTop(type, limit, time_range){
            spotifyUserAPI.get(`/me/top/${type}`,{
            params: {
                limit: limit,
                time_range: time_range
            }
        })
        .then(res => setWeeklyTracks(res.data))
        .catch(err => console.log(err))
        }
        getCurrentUserTop('tracks', 5, 'short_term')
    },[])

    return(
        <AppContext.Provider
        value={{
            monthlyArtists,
            monthlyTracks,
            spotifyUserAPI,
            search,
            found,
            selectedItem,
            setSelectedItem
        }}>
            {props.children}
        </AppContext.Provider>
    )
}