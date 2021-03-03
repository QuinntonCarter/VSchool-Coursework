import React, { useState } from 'react'

export default function BountyForm(props){
    const initInputs = { firstName: props.firstName || '', lastName: props.lastName || '', affiliation: props.affiliation || '' }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit} className='formDisplay'>

            <input 
            type='text'
            name='firstName'
            placeholder='First Name'
            value={inputs.firstName}
            onChange={handleChange}
            />

            <input 
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={inputs.lastName}
            onChange={handleChange}
            />
            
            <input
            type='text'
            name='affiliation'
            placeholder='Affiliation'
            value={inputs.affiliation}
            onChange={handleChange}
            />

            <button onClick={props.submit} className='addTarget'> Add Target </button>

        </form>
    )
}