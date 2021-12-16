import React, { useState } from 'react';
import axios from 'axios';

// will need to refactor this to work with new cueappDB

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
                token,
                lists: [],
                recentMood: {}
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

//err
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

    // CRUD
// get all posts in DB
    // function getAllPosts(){
        // userAxios.get('/api/posts')
        // .then(res =>{
        //         setUserState(prevState => ({
        //             ...prevState,
        //             allPosts: res.data
        //         }))
        //     }
        // )
        // .catch(err => console.log(err.response.data.errMsg))
    // };

// get logged in user's posts * fix/work on backend
    // function getUserPosts(userId){
        // userAxios.get(`/api/posts/user/${userId}`)
        // .then(res => {
        //     setUserState(prevState => ({
        //         ...prevState,
        //         posts: res.data
        //     }))
        // })
        // .catch(err => console.log(err.response.data.errMsg))
    // };

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
            signup,
            login,
            logout,
            userAxios,
            // addPost,
            // deletePost,
            // getUserPosts,
            // getAllPosts,
            // submitVote,
            // postComment,
            // deleteComment,
            resetAuthError
        }}>
            {props.children}
        </UserContext.Provider>
    )
}