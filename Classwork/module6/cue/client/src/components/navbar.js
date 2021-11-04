// navbar:
// adheres to bottom of screen/app
// 3 buttons, profile, search, and logout
// grid layout in css file, 3 columns
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './context/userProvider';

export default function NavBar(props){
    const { logout } = useContext(UserContext)

    return(
        <div className='navbarContainer'>
            <Link to='/main/lists'> <i class="far fa-list-alt"/> Lists </Link>
            <Link to='/main'> Search </Link>
            <button onClick={logout}> Logout </button>
        </div>
    )
}