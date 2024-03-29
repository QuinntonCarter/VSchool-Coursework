import React, { useState, useContext, useEffect } from 'react';
import AuthForm from './components/forms/authForm.js';
import { UserContext } from './components/context/userProvider.js';
import { accessToken, getCurrentUserProfile } from './components/spotify.js';

const {
    REACT_APP_SPOTIFY_LOGIN_URL
} = process.env

export default function Auth(){
    const initInputs = {
        username: '',
        password: ''
    };

    const [ inputs, setInputs ] = useState(initInputs);
    const [ toggle, setToggle ] = useState(false);

    const {
        token,
        signup,
        login,
        errMsg,
        resetAuthError,
        spotifyUserState,
        setSpotifyUserState
    } = useContext(UserContext);

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    function handleSignup(e){
        e.preventDefault()
        signup(inputs)
    };

    function handleLogin(e){
        e.preventDefault()
        login(inputs)
    };

    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthError()
        setInputs(initInputs)
    };

    useEffect(()=> {
        if(accessToken){
            setSpotifyUserState(prevState => ({
                ...prevState,
                spotifyToken: accessToken
            }))
            const fetchData = async () => {
            try {
                const { data } = await getCurrentUserProfile();
                localStorage.setItem('spotifyUser', JSON.stringify(data))
                setSpotifyUserState(prevState => ({
                    ...prevState,
                    spotifyUser: data
                }))
            } catch(err) {
                console.error(err);
            }}
            fetchData();
        }if(!accessToken){
            localStorage.clear()
        }
    }, [setSpotifyUserState, token]);
    
    return spotifyUserState.spotifyUser ? 
        <div className='container-main'>
                { !toggle ?
                    <div className='container-main grid justify-items-stretch p-3'>
                        <h1 className='header text-lg'> Create Account </h1>
                            <AuthForm
                                handleChange={handleChange}
                                handleSubmit={handleSignup}
                                inputs={inputs}
                                btnText='create'
                                errMsg={errMsg}
                            />
                        <button onClick={toggleForm} className='text-center'> I have an account </button>
                    </div>
                    :
                    <div className='container-main grid justify-items-stretch p-3'>
                        <h1 className='header text-lg'> Login </h1>
                            <AuthForm
                                handleChange={handleChange}
                                handleSubmit={handleLogin}
                                inputs={inputs}
                                btnText='login'
                                errMsg={errMsg}
                            />
                        <button onClick={toggleForm} className='justify-self-center mt-0'> I'm not a member </button>
                    </div>
                }
        </div>
        :
        <div className='container-main text-center'>
            <p className='text-xs p-3'> <span className='text-indigo-500'> mood. </span> is an app built for viewing <span style={{color: '#1DB954'}}> Spotify </span> listening history among friends. 
            By using this app, you are agree to allow it to access your <span style={{color: '#1DB954'}}> Spotify </span> listening history and stats. 
            If you choose to post, you are agreeing to store the associated <span style={{color: '#1DB954'}}> Spotify </span> listening metadata for viewing by 
            yourself and friends but no sensitive account information. <br/> <span className='text-indigo-600'> This app will never access or store sensitive account information. </span> You may delete your account at any time.</p>
            <a className='btnbold-small bg-indigo-600' href={REACT_APP_SPOTIFY_LOGIN_URL}> Login with Spotify </a>
        </div>
};