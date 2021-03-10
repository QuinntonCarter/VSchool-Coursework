import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './components/itemCom.js'
import ItemForm from './components/itemForm.js'

export default function App(){
    const [items, setItems] = useState([])

// GETs inventory from db
    function getInventory(){
        axios.get('/inventory')
            .then(res => setItems(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }

// GET inventory w getInventory on page load
    useEffect(() => {
        getInventory()
    }, [])

    return(
        <div className='inventoryContainer'>

            <ItemForm/>

            {items.map(item =>
                <Item
                {...item}
                />
                )}
        </div>
    )
}