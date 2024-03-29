import React, { useState } from 'react';
import axios from 'axios';

const {
    REACT_APP_MOOD_SERVER_URL
} = process.env

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
        friends: [],
        friendLists: [],
        friendPosts: [],
        errMsg: ''
    };

    const initSpotifyState = {
        spotifyUser: JSON.parse(localStorage.getItem('spotifyUser')) || null,
        spotifyToken: localStorage.getItem('spotify_access_token') || '',
        errMsg: ''
    };

    const [ spotifyUserState, setSpotifyUserState ] = useState(initSpotifyState);
    const [ userState, setUserState ] = useState(initState);

// for auth
    function signup(credentials){
        axios.post(`${REACT_APP_MOOD_SERVER_URL}/auth/signup`, credentials)
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
        .catch(err => handleAuthError(err.response.data.errMsg))
    };

    function login(credentials){
        const parsedInputs = {
            username: credentials.username.split(' ').join('_'),
            password: credentials.password
        }
        axios.post(`${REACT_APP_MOOD_SERVER_URL}/auth/login`, parsedInputs)
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
        .catch(err => handleAuthError(err.response.data.errMsg))
    };

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
        });
    };

//  err
    function handleAuthError(err){
        setUserState(prevState => ({
            ...prevState,
            errMsg: err
        }))
    };

    function resetAuthError(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ''
        }))
    };

// share posts depending on type
    const shareItem = async (list, timeframe) => {
        if(list.type === 'playlist'){
            userAxios.post(`${REACT_APP_MOOD_SERVER_URL}/app/lists`, list, {
                params: {
                    time: timeframe
                }
            })
            .then((res) => setUserState(prevState => ({...prevState, lists: [res.data]})))
            .catch(err => console.log(err))
        } else {
            userAxios.post(`${REACT_APP_MOOD_SERVER_URL}/app/moods/${timeframe}`, list)
            .then((res) => setUserState(prevState => ({...prevState, recentMood: [res.data]})))
            .catch(err => console.log(err))
        }
    };

    // follow and unfollow
    const updateFollowStatus = (id, type) => {
        userAxios.post(`${REACT_APP_MOOD_SERVER_URL}/app/users/friends`, {
            params: {
                type: type,
                id: id
            }
        })
        .then(res => 
            setUserState(prevState => ({
                ...prevState,
                user: res.data,
                friends: res.data.friends
            }))
        )
        .catch(err => console.log(err))
    };


// get all friends' mood in DB **
    const getStatus = async (type, searched) => {
        if(type === 'user'){
        const { data } = await userAxios.get(`${REACT_APP_MOOD_SERVER_URL}/app/moods`, {
            params: {
                type: type
            }
        })
        return data
        } else if(type === 'friends'){
        const { data } = await userAxios.get(`${REACT_APP_MOOD_SERVER_URL}/app/moods`, {
            params: {
                type: type
            }
        })
        return data
        } else if(type === 'searched'){
            const { data } = await userAxios.get(`${REACT_APP_MOOD_SERVER_URL}/app/moods`, {
                params: {
                    type: type,
                    searched: searched
                }
            })
            return data
        }};

// get recent playlist
    const getPosts = async (type) => {
        if(type === 'user'){
        const { data } = await userAxios.get(`${REACT_APP_MOOD_SERVER_URL}/app/lists`, {
            params: {
                type: type,
            }
        })
        return data
    } else if(type === 'friends'){
        const { data } = await userAxios.get(`${REACT_APP_MOOD_SERVER_URL}/app/lists`, {
            params: {
                type: type
            }
        })
        return data
    }};

    // delete account and logout
    const deleteUserAccount = () => {
        userAxios.delete(`${REACT_APP_MOOD_SERVER_URL}/app/users/removeAcc`)
        .then(res => console.log(res.data))
        .catch(err => handleAuthError(err.response.data.errMsg))
        setTimeout(() => { logout() }, 1000)
    };

    return(
        <UserContext.Provider
        value={{
            ...userState,
            setUserState,
            spotifyUserState,
            setSpotifyUserState,
            userState,
            signup,
            login,
            logout,
            userAxios,
            deleteUserAccount,
            shareItem,
            updateFollowStatus,
            getStatus,
            getPosts,
            resetAuthError
        }}>
            {props.children}
        </UserContext.Provider>
    )
};