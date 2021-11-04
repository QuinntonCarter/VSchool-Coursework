import { useContext } from 'react';
// profile view
// inlcudes list components
// includes user information from userContext
import { UserContext } from '../context/userProvider.js';

export default function Profile(){
    const { userState } = useContext(UserContext)

    return(
        <>

        </>
    )
}