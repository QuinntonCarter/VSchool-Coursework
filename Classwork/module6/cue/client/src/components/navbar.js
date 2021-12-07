// navbar:
// adheres to bottom of screen/app
// 3 buttons, profile, search, and logout
// grid layout in css file, 3 columns
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './context/userProvider';

export default function NavBar(props){
    const {
        logout
    } = useContext(UserContext)

    return(
        <div className='flex flex-row justify-evenly mx-auto fixed bottom-0 w-screen p-2 bg-cyan-900'>
            <Link to='/'> profile </Link>
            <Link to='/search'> search </Link>
            <Link to='/lists'> friends </Link>
            <button onClick={logout}> logout </button>
        </div>
    )
}