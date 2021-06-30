import React, {useState, useContext} from "react";
import AuthForm from './forms/AuthForm.js';
import { UserContext } from '../context/UserProvider.js';

const initInputs = { username:'', password:'' }

export default function Auth(){
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login} = useContext(UserContext)

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

    return(
        <div className='authContainer'>
            <h1 className='header'> chat app </h1>
            { !toggle ?
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText='sign up'
                    />
                    <p style={{cursor: 'pointer'}} onClick={()=> setToggle(prev => !prev)}> current member? </p>
                </>
                :
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText='login'
                    />
                    <p style={{cursor: 'pointer'}} onClick={()=> setToggle(prev => !prev)}> not a member? </p>
                </>
            }
        </div>
    )
}