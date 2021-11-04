import React, { useState, useContext } from "react";
import AuthForm from './components/forms/authForm.js';
import { UserContext } from './components/context/userProvider.js';
import { accessToken } from './components/spotify.js';


export default function Auth(){
    const initInputs = {
        username: '',
        password: ''
    }
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {
        signup,
        login,
        errMsg,
        resetAuthError
    } = useContext(UserContext)

    // const {
    //     spotifyToken,
    //     setSpotifyToken
    // } = useContext(SpotifyContext)

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

    // useEffect(()=> {
    //     if(accessToken){
    //         setSpotifyToken(accessToken);
    
    //         const fetchData = async () => {
    //         try {
    //             const {data} = await getCurrentUserProfile();
    //             setSpotifyProfile(data);
    //         } catch(e) {
    //             console.error(e);
    
    //         }
    //         }
    //         fetchData();
    //     } else if (!accessToken & spotifyToken) {
    //         return;
    //     } else if (!accessToken & !spotifyToken){
    //         logout();
    //     }
    // }, [spotifyToken, setSpotifyProfile, logout])

    return accessToken ? 
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
            <img src="https://developer.spotify.com/assets/branding-guidelines/logo.png" alt="spotify-logo"/>
            <a href="http://localhost:8888/login"> Login with Spotify </a>
        </div>
}