import React, { useState } from 'react'
import BountyForm from './BountyForm.js'

export default function Target(props){
    const {firstName, lastName, affiliation, status, _id} = props
    const [statusCheck, setStatusCheck] = useState()
    const [toggleEdit, setToggleEdit] = useState()

    return(
        <div className='targetDisplay'>
            { !toggleEdit ? 
                <>
                    <h1> First Name: {firstName} 
                    <br/> Last Name: {lastName} </h1>
                    <h2> Affiliation: {affiliation} </h2>
                    <h2> Status: {status} </h2>
                    <button className="editTarget" onClick={()=> setToggleEdit(prevState => !prevState)}> Edit </button>
                    <button className="deleteTarget" > Delete </button>
                    <hr/>
                </>
                :
                <>
                    <BountyForm
                        firstName={firstName}
                        lastName={lastName}
                        affiliation={affiliation}
                        status={status}
                        _id={_id}
                    />
                    <div>
                        <button className="editTarget"> Close </button>
                    </div>
                </>
            }
        </div>
    )
}