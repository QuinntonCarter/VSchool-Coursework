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
        spotifyUser,
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
                console.log(data)
                localStorage.setItem('spotifyUser', JSON.stringify(data))
                setSpotifyUserState(prevState => ({
                    ...prevState,
                    spotifyUser: data
                }))
                // where user information should be sent to back for use in model
                // will need to reapply email each time on login
                // just post to signup model route for new users
                // setSpotifyProfile(data);
            } catch(err) {
                console.error(err);
            }}
            fetchData();
        }if(!accessToken){
            localStorage.clear()
        }
    }, [setSpotifyUserState, token]);
    
    return spotifyUser ? 
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
        <div>
            <a href="http://localhost:8888/login"> Login with Spotify </a>
        </div>
};