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
        spotifyUser: {
            display_name
        }
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
        // not spotif owned
        const collected = data.items.filter(item => item.owner.display_name !== 'Spotify');
        // less than or equal to 100 tracks
        const fit = collected.filter(item => item.tracks.total <= 100)
        return fit
    };

    // for finding overall playlist analysis data; id = playlistId **
    const getPlaylistTracks = async (id) => {
        const { data } = await spotifyUserAPI.get(`/playlists/${id}/tracks`)
        setPlaylistTracks(data)
    };


    // ** for later **
    // const getTracksFeatures = async () => {
    //     const trackIdsString = playlistTracks.items.map(item => {
    //         return item.track.id
    //     }).toString()
    //     const { data } = await spotifyUserAPI.get(`/audio-features`, {
    //         params: {
    //             ids: trackIdsString
    //         }
    //     })
    //     return data
    //     // const parseNA = data.audio_features.filter(item => item !== null)
    //     // test(parseNA)
    // };
    
    //*** later  */ make this into full out analysis; gets features and track analysis ***
    // median tempo, key, loudness.
    // const test = (items) => {
    //     let danceAbility = []
    //     // valence, loudness, tempo, energy, danceability
    //     const verHighDance = items.filter(item => item.danceability >= .75).map(item => item.danceability)
    //     const highDance = items.filter(item => item.danceability >= .65 && item.danceability <= .75).map(item => item.danceability)
    //     const mediumDance = items.filter(item => item.danceability <= .6 && item.danceability >= .4).map(item => item.danceability)
    //     const lowDance = items.filter(item => item.danceability <= .4 && item.danceability >= .2).map(item => item.danceability)
    //     const verLowDance = items.filter(item => item.danceability <= .2).map(item => item.danceability)
    //     danceAbility.push({'extreme': verHighDance.length, 'veryhigh': highDance.length, 'medium':mediumDance.length, 'low':lowDance.length, 'extremelow': verLowDance.length})
    //     Object.values(danceAbility).forEach(val => console.log(val))
    //     // const len = arrSort.length
    //     // const mid = (len / 2)
    //     // const median = len % 2 === 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
    //     // console.log(mid)

    // }
    
    useEffect(() => {
        getCurrentUserTop('artists', 5, 'short_term')
        .then(res => setMonthlyArtists(res))
        .catch(err => console.log(err))
        getCurrentUserTop('tracks', 5, 'short_term')
        .then(res => setMonthlyTracks(res))
        .catch(err => console.log(err))
    }, []);

    // *** for testing
    // useEffect(() => {
    //     console.log(trackFeatures)
    // },[trackFeatures]);
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
            // setMood
        }}>
            {props.children}
        </AppContext.Provider>
    )
};