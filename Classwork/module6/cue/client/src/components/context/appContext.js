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
        userAxios
    } = useContext(UserContext)

    const [ monthlyArtists, setWeeklyArtists ] = useState({})
    const [ monthlyTracks, setWeeklyTracks ] = useState({})
    const [ foundUsers, setFoundUsers ] = useState([])

    function search(inputs, type){
        let parseInputs = inputs.split(' ').join('_')
        userAxios.get(`/app/users`, {
            params: {
                username: parseInputs,
                type: type
            }
        })
        .then(res => console.log(res.data))
        // .then(res => setFoundUsers(res.data))
        .catch(err => console.log(err))
        // .finally(() => console.log(foundUsers))
    }

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
            foundUsers
        }}>
            {props.children}
        </AppContext.Provider>
    )
}