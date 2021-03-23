import React, { useState } from 'react';
import BountyForm from './bountyForm.js';

export default function Target(props){
    const [toggle, setToggle] = useState(false)
    const {firstName, lastName, affiliation, _id} = props

    return(
        <div className='target'>
            {!toggle ? 
                <>
                    <h1 className='targetName'> First Name: {`${firstName}`}</h1> 
                    <h1 className='targetName'> Last Name: {`${lastName}`} </h1>
                    <h2 className='affiliation'> Affiliation: {`${affiliation}`} </h2>
                    <button className='editTarget' onClick={() => setToggle(prevState => !prevState)}> Edit Target </button>
                    <button className='deleteTarget' onClick={() => props.deleteTarget(_id)}> Delete </button>
                    <hr/>
                </>
        :
                <>
                    <BountyForm
                        firstName={firstName}
                        lastName={lastName}
                        affiliation={affiliation}
                        _id={_id}
                        // changes the value of btnText to 'Save Edit' when toggle = true
                        btnText='Save Edit'
                        // changes the function of 'submit' to props.submitEdit when toggle = true
                        submit={props.editTarget}
                        setToggle={setToggle}
                    />
                    <button className='editTarget' onClick={() => setToggle(prevState => !prevState)}> Close </button>
                    <hr/>
                </>
            }
        </div>
    )
}