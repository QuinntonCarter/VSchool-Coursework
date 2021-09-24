import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext();


const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
});

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || '',
        posts: [],
        allPosts: [],
        errMsg: ''
    };

    const [userState, setUserState] = useState(initState)
// for auth
    function signup(credentials){
        axios.post('/auth/signup', credentials)
        .then(res => {
            const {user, token} = res.data
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
        axios.post('/auth/login', credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            getUserPosts()
            getAllPosts()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
            console.log(res.data)
        })
        .catch(err => handleAuthError(err.response.data.errMsg))
    };

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
            posts: [],
            allPosts: []
        })
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
// get logged in user's posts
    function getUserPosts(){
        userAxios.get('/api/posts/user')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                posts: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    };

// get all posts in DB
    function getAllPosts(){
        userAxios.get('/api/posts')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                allPosts: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    };

// new post
    function addPost(newPost){
        userAxios.post('/api/posts', newPost)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                posts: [...prevState.posts, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    };

// delete post
    function deletePost(postId){
        userAxios.delete(`/api/posts/${postId}`)
        .then(res => {
            setUserState(prevState => 
                prevState.filter(post => post._id !== postId))
        })
        .catch(err => console.log(err))
    }

// voting functionality
    function submitVote(vote, userId, postId){
        userId === userState.user._id ?
        console.log('Error: this is your own vote or comment')
        :
        userAxios.put(`/api/posts/${postId}/${vote}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

// comments CRUD
    function postComment(postId, newComment){
        userAxios.put(`/api/posts/${postId}`, newComment)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

// delete comment * * * *
    function deleteComment(postId, comId){
        userAxios.put(`/api/posts/${postId}/${comId}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

// keep posts on page
    useEffect(() => {
        getUserPosts()
        getAllPosts()
    }, []);

    return(
        <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            addPost,
            deletePost,
            getUserPosts,
            getAllPosts,
            submitVote,
            postComment,
            deleteComment,
            resetAuthError
        }}>
            {props.children}
        </UserContext.Provider>
    )
}