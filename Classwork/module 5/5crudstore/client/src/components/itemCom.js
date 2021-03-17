import React, { useState } from 'react'
import ItemForm from './itemForm.js'


export default function Item(props){
    const [toggle, setToggle] = useState(false)
    const { name, price, dept, _id } = props


    return(
        <div className='item'>

        {!toggle ?
        <>
            <h2 className='itemID'> ID# {`${_id}`} </h2>
            <h1 className='itemTitle'> {`${name} –– $${price}`} </h1>
            <button className='editItem' onClick={() => setToggle(prevState => !prevState)}> Edit Item </button>
            <button className='deleteItem' onClick={() => props.deleteItem(_id)}> Delete </button>
            <hr/>
        </>
        :
        <>
            <ItemForm
                name={name}
                price={price}
                dept={dept}
                _id={_id}
                // changes the value of btnText to 'Save Edit' when toggle = true
                btnText='Save Edit'
                // changes the function of 'submit' to props.submitEdit when toggle = true
                submit={props.editItem}
            />
            <button className='editItem' onClick={() => setToggle(prevState => !prevState)}> Close </button>
            <hr/>
        </>
        }

        </div>
    )
}