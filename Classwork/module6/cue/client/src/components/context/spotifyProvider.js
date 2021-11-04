import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from './context/userProvider.js';
// ** might be broken, vscode is acting weird: also check Auth.js for problems
import { accessToken, getCurrentUserProfile } from '../fakeFolder/spotify.js';

const SpotifyContext = React.createContext();

export default function SpotifyProvider(props){
    const [ spotifyToken, setSpotifyToken ] = useState(null)
    const [ spotifyProfile, setSpotifyProfile ] = useState(null);

// ** refactor this to work from this page and save some info into local state for use like userProvider
// ** may need to edit spotify.js to save user info in localstorage.. or useEffect below to do it
    const initState = {
        user: JSON.parse(localStorage.getItem('spotifyUser')) || {},
        token: localStorage.getItem('spotify_access_token') || '',
        lists: [],
        errMsg: ''
    };

    const [ spotifyUserState, setSpotifyUserState ] = useState(initState)

    const {
        logout
    } = useContext(UserContext)


    useEffect(()=> {
        if(accessToken){
            setSpotifyToken(accessToken);
    
            const fetchData = async () => {
            try {
                const {data} = await getCurrentUserProfile();
                setSpotifyProfile(data);
            } catch(e) {
                console.error(e);
    
            }
            }
            fetchData();
        } else if (!accessToken & spotifyToken) {
            return;
        } else if (!accessToken & !spotifyToken){
            logout();
        }
    }, [spotifyToken, setSpotifyProfile, logout])
    
    return(
        <SpotifyContext.Provider
            value={{
                spotifyProfile,

            }}>
            {props.children}
        </SpotifyContext.Provider>
    )
}