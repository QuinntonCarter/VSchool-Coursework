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
        <div className='flex flex-row justify-evenly fixed bottom-0 w-screen bg-cyan-700'>
            <Link className='w-full p-3 pl-5' to='/recent_mood_artists'> <button> profile </button> </Link>
            <Link className='w-full p-3' to='/lists'> <button> friends </button> </Link>
            <Link className='w-full p-3' to='/search'> <button> search </button> </Link>
            <button className='bg-cerise-700 w-full p-1' onClick={logout}> logout </button>
        </div>
    )
}