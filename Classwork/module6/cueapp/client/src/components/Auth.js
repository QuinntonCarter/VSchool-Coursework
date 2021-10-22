import React, { useState, useContext } from "react";
import AuthForm from './forms/authForm.js';
import { UserContext } from '../context/userProvider.js';

import { SpotifyAuth } from 'react-spotify-auth';
import Cookies from 'js-cookie';

export default function Auth(){
    const initInputs = {
        username: '',
        password: ''
    }
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)
    const [spotifyToken, setToken] = useState(Cookies.get("spotifyAuthToken"))


    const { signup, login, errMsg, resetAuthError } = useContext(UserContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    }

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthError()
        setInputs(initInputs)
    }

    return spotifyToken ? 
        <div className='authContainer'>
                { !toggle ?
                    <>
                        <h1 className='header'> Create Account </h1>
                            <AuthForm
                                handleChange={handleChange}
                                handleSubmit={handleSignup}
                                inputs={inputs}
                                btnText='create'
                                errMsg={errMsg}
                            />
                        <p style={{cursor: 'pointer'}} onClick={toggleForm}> I have an account! </p>
                    </>
                    :
                    <>
                        <h1 className='header'> Login </h1>
                            <AuthForm
                                handleChange={handleChange}
                                handleSubmit={handleLogin}
                                inputs={inputs}
                                btnText='login'
                                errMsg={errMsg}
                            />
                        <p style={{cursor: 'pointer'}} onClick={toggleForm}> I'm not a member! </p>
                    </>
                }
        </div>
        : 
        <div className='authContainer'>
            <SpotifyAuth
                redirectUri='http://localhost:3000/auth'
                clientID='41305753399c4bb1b8bc94072ff3baed'
                scopes={[
                'playlist-read-private',
                'playlist-read-collaborative',
                'user-read-currently-playing',
                'user-read-recently-played',
                'user-read-playback-position',
                'user-library-read',
                'user-top-read',
                ]}
                onAccessToken={(spotifyToken) => setToken(spotifyToken)}
            />
        </div>
}