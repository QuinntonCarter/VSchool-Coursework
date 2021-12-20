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
        recentMood: {},
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
        .catch(err => handleAuthError(err.response.data.errMsg))
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
        .catch(err => handleAuthError(err.response.data.errMsg))
    };

    function logout(){
        setUserState({
            user: {},
            token: '',
        });
        localStorage.clear()
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
    const getStatus = (type) => {
        if(type === 'user'){
        userAxios.get(`/app/moods`, {
            params: {
                type: type
            }
        })
        .then(res => setUserState(prevState => ({
            ...prevState,
            recentMood: res.data})))
        .catch(err => console.log(err))
        } else if(type=== 'friends'){
        userAxios.get('/app/moods', {
            params: {
                type: type
            }
        })
        .then(res => setUserState(prevState => ({
            ...prevState,
            friendPosts: res.data})))
        .catch(err => console.log(err))
        }
    };

// get currentUsers recent posts
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

    useEffect(() => {
        console.log(userState)
    }, [userState])

// new post POST
    // function addPost(newPost){
        // userAxios.post('/api/posts', newPost)
        // .then(res => {
        //     setUserState(prevState => ({
        //         ...prevState,
        //         allPosts: [...prevState.allPosts, res.data]
        //     }))
        // })
        // .catch(err => console.log(err.response.data.errMsg))
    // };

// DELETE post
    // function deletePost(postId){
    //     userAxios.delete(`/api/posts/${postId}`)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    //     .finally(getAllPosts())
    // }

// voting functionality
    // function submitVote(vote, userId, postId){
    //     userId === userState.user._id ?
    //     console.log('Error: this is your own post or comment')
    //     :
    //     userAxios.put(`/api/posts/${vote}/${postId}`)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err.response.data.errMsg))
    //     .finally(getAllPosts())
    // }

// comments CRUD
// GET all comments by user
    // function getUserComm(userId){
    //     userAxios.get(`/api/comment/user/${userId}`)
    //     .then(res => {
    //         setUserState(prevState => ({
    //             ...prevState,
    //             comments: res.data
    //         }))
    //     })
    //     .catch(err => console.log(err.response.data.errMsg))
    // };

// POST comment
    // function postComment(postId, newComment){
    //     userAxios.put(`/api/comment/${postId}`, newComment)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err.response.data.errMsg))
    //     .finally(getAllPosts())
    // }

// DELETE comment ** check **
    // function deleteComment(postId, comId){
        // userAxios.put(`/api/${postId}/${comId}`)
        // .then(res => {
        //     setUserState(prevState => ({
        //         ...prevState,
        //         allPosts: [...prevState.allPosts, res.data]
        //     }))
        // })
        // .catch(err => console.log(err.response.data.errMsg))
        // .finally(getAllPosts())
    // }

    return(
        <UserContext.Provider
        value={{
            ...userState,
            ...spotifyUserState,
            setSpotifyUserState,
            userState,
            signup,
            login,
            logout,
            userAxios,
            shareItem,
            updateFollowStatus,
            getStatus,
            // deletePost,
            // getAllPosts,
            resetAuthError
        }}>
            {props.children}
        </UserContext.Provider>
    )
};