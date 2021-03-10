import React from 'react'

export default function Item(props){
    const { name, price } = props
    
    return(
        <div className='item'>
            <h1> {`${name} –– $${price}`} </h1>
        </div>
    )
}