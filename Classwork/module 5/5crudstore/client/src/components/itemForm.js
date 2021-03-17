import React, { useState } from 'react'

export default function ItemForm(props){
    const initInputs = { name: props.name || "", price: props.price || "", dept: props.dept || "" }
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
                <input 
                    type='text' 
                    name='dept' 
                    value={inputs.dept} 
                    onChange={handleChange} 
                    placeholder='Input Food or Household' 
                    required></input>
                {/* <select
                    type='text'
                    name='dept'
                    value={inputs.dept}
                    onChange={handleChange}
                    required>
                    <option value=''> - Department - </option>
                    <option value='Food'> Food </option>
                    <option value='Household'> Household </option>
                </select> */}
                {/* submit is from itemCom when toggle condition in itemCom.js is met, otherwise is from app.js */}
                <button style={{cursor: 'pointer'}} onClick={props.submit}> {props.btnText} </button>
            </form>
    )
}