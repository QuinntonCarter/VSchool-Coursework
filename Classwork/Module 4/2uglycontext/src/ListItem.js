import React from 'react'


function ListItem(props){
    return(
        <div className='listitem'>
            <ul>
                <img className='uglything' src={props.URL} alt={props.desc}/>
                <li> {props.item} </li>
                <p> {props.desc} </p>
            </ul>
        </div>
    )
}

export default ListItem;