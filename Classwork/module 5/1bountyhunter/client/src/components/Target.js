import React, { useState } from 'react'
import BountyForm from './bountyForm.js'

export default function Target(props){
    const [editToggle, setEditToggle] = useState(false)
    const {firstName, lastName, affiliation, status, _id} = props

    return(
        <div className='targetDisplay'>
        { !editToggle ?
            <>
                <hr/>
                <h1> First Name: {firstName}
                <br/> Last Name: {lastName} </h1>
                <h2> Affiliation: {affiliation} </h2>
                <h2> Status: {status} </h2>
                <button 
                    className='deleteTarget'
                    onClick={() => props.delete(_id)}
                > Delete </button>
                <button 
                    className='editTarget'
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                > Edit </button>
            </>
            :
            <>
                <BountyForm
                    firstName={firstName}
                    lastName={lastName}
                    affiliation={affiliation}
                    status={status}
                    _id={_id}
                    submit={props.editTarget}
                />
                <button 
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}
                > Close </button>
            </>
        }
    </div>
    )
}