// import React, { useEffect, useState, useContext } from 'react';
// import { UserContext } from './userProvider.js';
// import { accessToken, getCurrentUserProfile } from '../spotify.js';

// export const SpotifyContext = React.createContext();

// export default function SpotifyProvider(props){
// // ** BETA get token and user from userState
//     // const [ spotifyToken, setSpotifyToken ] = useState(null);
//     // const [ spotifyProfile, setSpotifyProfile ] = useState(null);

// // ** may need to edit spotify.js to save user info in localstorage.. or useEffect below to do it
//     const initState = {
//         spotifyUser: JSON.parse(localStorage.getItem('spotifyUser')) || {},
//         spotifyToken: localStorage.getItem('spotify_access_token') || '',
//         errMsg: ''
//     };

//     const [ spotifyUserState, setSpotifyUserState ] = useState(initState)

//     const {
//         logout
//     } = useContext(UserContext)


//     useEffect(()=> {
//         if(accessToken){
//         // ** BETA get token from userState
//             // setSpotifyToken(accessToken);
//             localStorage.setItem('spotify_access_token', accessToken)
//             setSpotifyUserState(prevState => ({
//                 ...prevState,
//                 spotifyToken: accessToken
//             }))
//             const fetchData = async () => {
//             try {
//                 const { data } = await getCurrentUserProfile();
//                 // setSpotifyProfile(data);
//                 // where user information should be sent to back for use in model
//                 // will need to reapply email each time on login
//                 // just post to signup model route for new users
//                 localStorage.setItem('spotifyUser', JSON.stringify(data))
//                 setSpotifyUserState(prevState => ({
//                     ...prevState,
//                     spotifyUser: data
//                 }))
//             } catch(err) {
//                 // ** send error to auth handler
//                 console.error(err);
//             }}
//             fetchData();
//         // } else if (!accessToken & spotifyUserState.spotifyToken){
//         //     return;
//         // } else if (!accessToken & !spotifyUserState.spotifyToken){
//         //     logout();
//         }
//     }, [spotifyUserState.spotifyToken, logout])
    
//     return(
//         <SpotifyContext.Provider
//             value={{
//                 ...spotifyUserState
//             }}>
//             {props.children}
//         </SpotifyContext.Provider>
//     )
// }