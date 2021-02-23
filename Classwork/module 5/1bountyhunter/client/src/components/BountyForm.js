import React, { useState } from 'react'

export default function BountyForm(props){
    const initInputs = { firstName: props.firstName || '', lastName: props.lastName || '', affiliation: props.affiliation || ''}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs =>({
            ...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form 
        className='formDisplay' 
        onSubmit={handleSubmit}>
            
            <input 
            type='text'
            name='firstName'
            value={inputs.firstName}
            onChange={handleChange}
            placeholder='First Name'> 
            </input>

            <input
            type='text'
            name='lastName'
            value={inputs.lastName}
            onChange={handleChange}
            placeholder='Last Name'>
            </input>

            <input
            type='text'
            name='affiliation'
            value={inputs.affiliation}
            onChange={handleChange}
            placeholder='Affiliation'>
            </input>

        </form>
    )
}