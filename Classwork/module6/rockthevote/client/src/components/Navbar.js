import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {UserContext} from '../context/UserProvider.js'

export default function Navbar(){
    const { logout } = useContext(UserContext)
    return(
        <div className='navbar'>
            <Link className='link' to='/posts'
            > Posts </Link>
            <Link className='link' 
                to='/profile'
                > Profile </Link>
            <Link className='link logout'
                onClick={logout}
                style={{cursor: 'pointer',
                color: 'red',
                fontWeight: '900',
                backgroundColor: 'whitesmoke'
            }} to='/'
            > Logout </Link>
        </div>
    )
}