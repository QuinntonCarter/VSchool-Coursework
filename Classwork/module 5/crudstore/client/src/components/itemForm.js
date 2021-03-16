import React, { useState } from 'react'

// rebuild with main js files. needs new package.json

export default function ItemForm(props){
    const initInputs = { name: props.name || '', dept: props.dept || '', price: props.price || '' }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        // submit is from app.js
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <div>

            <form onSubmit={handleSubmit}>
                <h4 
                    style={{margin: '7px', marginTop: '15px'}}
                    >
                Add Item</h4>
                <input 
                    name='name' 
                    value={inputs.name}
                    onChange={handleChange} 
                    placeholder='Item Name' 
                    type='text' 
                    required></input>
                <input 
                    type='text' 
                    name='price' 
                    value={inputs.price} 
                    onChange={handleChange} 
                    placeholder='Input Price' 
                    required></input>
                <select 
                    name='dept'
                    value={inputs.dept}
                    onChange={handleChange}
                    required>
                    <option> - Department - </option>
                    <option value='Food'> Food </option>
                    <option value='Household'> Household </option>
                </select>
                {/* submit is from itemCom when toggle condition in itemCom.js is met, otherwise is from app.js */}
                <button onClick={props.submit}> {props.btnText} </button>
            </form>
            
        </div>
    )
}