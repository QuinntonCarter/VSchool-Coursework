import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCom from './components/itemCom.js'
import ItemForm from './components/itemForm.js'

export default function App(){
    const [items, setItems] = useState([])

// GETs inventory from db
    function getInventory(){
        axios.get('/inventory')
            .then(res => setItems(res.data))
            .catch(err => alert(err))
    }

    
    // POST new item
    function addItem(newItem){
        axios.post('/inventory', newItem)
        .then(res => {
            setItems(prevItems => [...prevItems, res.data])
        })
        .catch(err => console.log(err))
        
    }
    
    // DELETE item
    function deleteItem(itemId){
        axios.delete(`/inventory/${itemId}`)
        .then(res => {
            setItems(prevItems => prevItems.filter(item => item._id !== itemId))
        })
        .catch(err => console.log(err))
    }
    
    // PUT/update item
        function editItem(updates, itemId){
            axios.put(`/inventory/${itemId}`, updates)
            .then(res => 
                setItems(prevItems => prevItems.map(item => item._id !== itemId ? item : res.data))
            )
            .catch(err=> console.log(err))
        }

// FILTER GET by type
    function filterTypeSelection(e){
        if(e.target.value === ''){
            getInventory()
        } else {
            axios.get(`/inventory/search/dept?dept=${e.target.value}`)
                .then(res => setItems(res.data))
                .catch(err => alert(err))
        }
    }


// BETA * FILTER GET by price
    // function filterPriceSelection(e){
    //     if(e.target.value === ''){
    //         getInventory()
    //     } else if(e.target.value === '< $10'){
    //         // add logic for retrieval by price, will need > < = usage?
    //     }
    // }

// GET inventory w getInventory on page load
    useEffect(() => {
        getInventory()
    }, [])

    return(
        <div className='inventoryContainer'>
            <div className='filterDisp'>
                
                <ItemForm
                submit={addItem}
                btnText='Add Item'
                // filterPrice={filterPriceSelection}
                />

                <h4 style={{margin: '7px'}}> Filter List By </h4>
                <select onChange={filterTypeSelection}>
                    <option value=''> - Department - </option>
                    <option value='Food'> Food </option>
                    <option value='Household'> Household </option>
                </select>
                <hr style={{backgroundColor: 'black'}}/>
                
                        {items.map(item =>
                            <ItemCom
                            {...item}
                            editItem={editItem}
                            deleteItem={deleteItem}
                            key={item._id}
                            />
                            )}

                <h4 style={{textAlign: 'center', margin: 0, textJustify: 'center', padding: '7px'}}> Quinnton Carter 2021 </h4>
            </div>
                {/*
                <select>
                <option value=''> - Price - </option>
                <option value='< $10'> less than $10 </option>
                <option value='< $50'> less than $50 </option>
                
                <option value='< $100'> less than $100 </option>
                <option value='< $200'> less than $200 </option>
                <option value='< $500'> less than $500 </option>
                <option value='< $1000'> less than $1000</option>
            </select> */}
        </div>
    )
}