import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create();
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
});

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || '',
        lists: [],
        recentMood: [],
        friendPosts: [],
        errMsg: ''
    };

    const initSpotifyState = {
        spotifyUser: JSON.parse(localStorage.getItem('spotifyUser')) || null,
        spotifyToken: localStorage.getItem('spotify_access_token') || '',
        errMsg: ''
    };

    const [ spotifyUserState, setSpotifyUserState ] = useState(initSpotifyState);
    console.log(spotifyUserState.spotifyUser)
    const [ userState, setUserState ] = useState(initState);

// for auth
    function signup(credentials){
        axios.post('/auth/signup', credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err))
    };

    function login(credentials){
        const parsedInputs = {
            username: credentials.username.split(' ').join('_'),
            password: credentials.password
        }
        axios.post('/auth/login', parsedInputs)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthError(err))
    };

    function logout(){
        setUserState({
            user: {},
            token: '',
        });
        setSpotifyUserState({
            spotifyUser: null,
            spotifyToken: '',
        });
        // spotifyLogout()
    };

//  err
    function handleAuthError(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    };

    function resetAuthError(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    };

    const shareItem = async (list, timeframe) => {
        if(list.type === 'playlist'){
            userAxios.post(`/app/lists`, list, {
                params: {
                    time: timeframe
                }
            })
            .then((res) => setUserState(prevState => ({...prevState, lists: [res.data]})))
            .catch(err => console.log(err))
        } else {
            userAxios.post(`/app/moods/${timeframe}`, list)
            .then((res) => setUserState(prevState => ({...prevState, recentMood: res.data})))
            .catch(err => console.log(err))
        }
    };

    const updateFollowStatus = (id, type) => {
        userAxios.post(`/app/users/friends`, {
            params: {
                type: type,
                id: id
            }
        })
        .then(res => 
            setUserState(prevState => ({
                ...prevState,
                user: {
                    friends: res.data.friends
                }
            }))
            )
        .catch(err => console.log(err))
    };

// CRUD **
// get all friends' posts in DB **
    const getStatus = async (type) => {
        if(type === 'user'){
        const { data } = userAxios.get(`/app/moods`, {
            params: {
                type: type
            }
        })
        return data
        // setUserState(prevState => ({
        //     ...prevState,
        //     recentMood: [data]}))
        //     console.log(userState)
        } else if(type=== 'friends'){
        const { data } = userAxios.get('/app/moods', {
            params: {
                type: type
            }
        })
        return data
    }
        // setUserState(prevState => ({
        //     ...prevState,
        //     friendPosts: data}))
        // }
    };

// get currentUsers recent playlist
    // const getPosts = async (type) => {
    //     if(type === 'user'){
    //     const { data } = await userAxios.get(`/app/users`, {
    //         params: {
    //             type: 'user',
    //         }
    //     })
    //     .then(() => {
    //         setUserState(prevState => ({
    //             ...prevState,
    //             recentMood: data.mood,
    //             lists: [data.lists]
    //         }))
    //     })
    //     .catch(err => console.log(err.response.data.errMsg))
    // } else if(type=== 'friends'){
    //     const { data } = await userAxios.get(`/app/users`, {
    //         params: {
    //             type: 'friends'
    //         }
    //     })
    // }};

    const deleteUserAccount = () => {
        userAxios.delete(`/app/users/removeAcc`)
        .then(res => console.log(res.data))
        .then(logout())
        .catch(err => console.log(err))
    }

    useEffect(() => {
        let type = 'user'
        getStatus(type)
        .then(res => setUserState(prevState => ({
                ...prevState,
                recentMood: [res]})),
                console.log(userState))
    }, [])

    return(
        <UserContext.Provider
        value={{
            ...userState,
            spotifyUserState,
            setSpotifyUserState,
            userState,
            signup,
            login,
            logout,
            userAxios,
            shareItem,
            updateFollowStatus,
            getStatus,
            resetAuthError
        }}>
            {props.children}
        </UserContext.Provider>
    )
};