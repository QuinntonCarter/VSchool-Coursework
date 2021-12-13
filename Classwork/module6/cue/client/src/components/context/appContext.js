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
    } = useContext(UserContext);

    const [ monthlyArtists, setMonthlyArtists ] = useState({});
    const [ monthlyTracks, setMonthlyTracks ] = useState({});
    const [ found, setFound ] = useState([]);

    const [ playlists, setPlaylists ] = useState({ items:[], total: 0});
    const [ playlistTracks, setPlaylistTracks ] = useState([]);
    const [ selectedItem, setSelectedItem ] = useState({});
    const [ trackFeatures, setTrackFeatures ] = ([{
        danceability: '',
        energy: '',
        tempo: ''
    }])

    const search = (inputs, type) => {
        const parseInputs = inputs.split(' ').join('_')
        userAxios.get(`/app/users`, {
            params: {
                inputs: parseInputs,
                type: type
            }
        })
        .then(res => setFound(res.data))
        .catch(err => console.log(err))
    };

    const getSelection = (id, location) => {
        userAxios.get(`/app/users`, {
            params: {
                id: id,
                type: location
            }
        })
        .then(res => setSelectedItem(res.data))
        .catch(err => console.log(err))
    };

    // useCallback(
    //     () => {
    //         callback
    //     },
    //     [input],
    // )

    const getCurrentUserTop = async (type, limit, time_range) => {
            const { data } = await spotifyUserAPI.get(`/me/top/${type}`,{
            params: {
                limit: limit,
                time_range: time_range
            }
        })
        return data
        };

    const getPlaylists = async (id) => {
        const { data } = await spotifyUserAPI.get(`/users/${id}/playlists`,{
            params: {
                limit: 50
            }
        })
        return data
    };

    // for finding overall playlist analysis data; id = playlistId **
    const getPlaylistTracks = async (id) => {
        const { data } = await spotifyUserAPI.get(`/playlists/${id}/tracks`)
        setPlaylistTracks(data)
    };

    const getTracksFeatures = () => {
        const trackIdsString = playlistTracks.items.map(item => {
            return item.track.id
        }).toString()
        spotifyUserAPI.get(`/audio-features`, {
            params: {
                ids: trackIdsString
            }
        })
        // map through to function 
        .then(res => 
            res.data.audio_features.map(item => test(item))
        )
        .catch(err => console.log(err))
    };
    
//*** */ make this into full out analysis; gets features and track analysis ***
// median tempo, key, loudness.
    const test = (items) => {

    }

    
    useEffect(() => {
        getCurrentUserTop('artists', 5, 'short_term')
        .then(res => setMonthlyArtists(res))
        .catch(err => console.log(err))
        getCurrentUserTop('tracks', 5, 'short_term')
        .then(res => setMonthlyTracks(res))
        .catch(err => console.log(err))
    }, []);

    // *** for testing
    useEffect(() => {
        console.log(trackFeatures)
    },[trackFeatures]);
    // ***

    return(
        <AppContext.Provider
        value={{
            monthlyArtists,
            monthlyTracks,
            spotifyUserAPI,
            search,
            found,
            setFound,
            selectedItem,
            getSelection,
            getPlaylists,
            playlists,
            setPlaylists,
            getPlaylistTracks,
            playlistTracks,
            getCurrentUserTop,
            getTracksFeatures
        }}>
            {props.children}
        </AppContext.Provider>
    )
};