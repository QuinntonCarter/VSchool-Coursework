import React, { useState, useContext } from "react";
import AuthForm from './forms/authForm.js';
import { UserContext } from '../context/userProvider.js';

// link imported styling failures to own stylesheets

export default function Auth(props){
    const initInputs = {
        username: '',
        password: ''
    }
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

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

    return(
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
    )
}