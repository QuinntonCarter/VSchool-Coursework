import React from 'react';

function UserDetails(props){

    return (
        <div className='badge'>
            <h4 className='badgeheader'> Badge: </h4>
            <h5> Name: {props.name} </h5>
            <h5> Phone: {props.phone} </h5>
            <h5> Birthplace: {props.birthplace} </h5>
            <h5> Food: {props.favfood}</h5>
            <h5> Email: {props.email} </h5>
            <h6> 
                <p> {props.about} </p> 
            </h6>
        </div>
    )
}

export default UserDetails;