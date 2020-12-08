import React from 'react';

function UserDetails(props){
    return (
        <div className='badge'>
            <h1 className='badgeheader'> Badge: {props.firstname+" "+props.lastname} </h1>
            <h5> Phone: {props.phone} </h5>
            <h5> Birthplace: {props.birthplace} </h5>
            <h5> Food: {props.favfood}</h5>
            <h5> Email: {props.email} </h5>
            <h4> 
                <p> {props.aboutme} </p> 
            </h4>
        </div>
    )
}

export default UserDetails;