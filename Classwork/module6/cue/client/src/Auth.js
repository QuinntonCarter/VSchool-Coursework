import React, { useState, useContext, useEffect } from 'react';
import AuthForm from './components/forms/authForm.js';
import { UserContext } from './components/context/userProvider.js';
import { accessToken, getCurrentUserProfile } from './components/spotify.js';

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
                console.error('error setting to state', err);
            }}
            fetchData();
        }if(!accessToken){
            localStorage.clear()
        }
    }, [setSpotifyUserState, token]);
    
    return spotifyUserState.spotifyUser ? 
        <div className='container-main'>
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
        <div className='container-main text-center'>
            <p className='text-xs p-3'> <span className='text-indigo-500'> mood. </span> is an app built for viewing <span style={{color: '#1DB954'}}> Spotify </span> listening history among friends. 
            By using this app, you are agree to allow it to access your <span style={{color: '#1DB954'}}> Spotify </span> listening history and stats. 
            If you choose to post, you are agreeing to store the associated listening metadata, song and album titles as well as artist names, for viewing by 
            yourself and friends. <span className='text-cerise-500'> This app will not store any of your Spotify account information besides the listening 
            history and stats but only if you post. This app will never access or store sensitive account information. </span> </p>
            <a className='btnbold-small bg-indigo-600' href="http://localhost:8888/login"> Login with Spotify </a>
        </div>
};