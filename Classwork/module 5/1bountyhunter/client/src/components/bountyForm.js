import React, { useState } from 'react';

export default function BountyForm(props){
    const initInputs = {firstName: props.firstName || '', lastName: props.lastName || '', affilitaion: props.affiliation || ''}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)

    }

    return(
        <form onSubmit={handleSubmit}>
                <h4 
                    style={{margin: '7px', marginTop: '15px'}}
                    >
                Add Target</h4>
                <input 
                    type='text'
                    name='firstName' 
                    value={inputs.firstName}
                    onChange={handleChange} 
                    placeholder='First Name' 
                    required></input>
                <input 
                    type='text' 
                    name='lastName' 
                    value={inputs.lastName} 
                    onChange={handleChange} 
                    placeholder='Last Name' 
                    required></input>

                <select
                    type='text'
                    name='affiliation'
                    value={inputs.affiliation}
                    onChange={handleChange}
                    required>
                    <option value=''> - Affiliation - </option>
                    <option value='Jedi'> Jedi </option>
                    <option value='Sith'> Sith </option>
                </select>
                {/* submit is from itemCom when toggle condition in itemCom.js is met, otherwise is from app.js */}
                <button style={{cursor: 'pointer'}} onClick={props.submit}> {props.btnText} </button>
        </form>
    )
}