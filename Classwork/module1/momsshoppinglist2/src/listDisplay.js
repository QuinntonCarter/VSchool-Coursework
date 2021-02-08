// # Could possibly implement this

import React from 'react'

function listDisplay(props){
    function erase(e){
        e.target.parentElement.textContent = ''
    }
    function edit(e){
        e.target.parentElement.addEventListener('click', () => {
            console.log('test')
        })
    }
    return(
        <div>
            <button onClick={erase}>x</button>
            <button>Edit</button>
            <h3> {props.item} </h3>
        </div>
    )
}

export default listDisplay