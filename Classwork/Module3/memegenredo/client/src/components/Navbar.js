import { PlusCircleIcon } from '@heroicons/react/outline';
import { ViewListIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='mx-auto text-cream fixed bottom-0 p-3 w-screen grid grid-cols-2 grid-rows-1'>
            <Link to='/' className='font-extrabold p-3 rounded hover:bg-blue-500 inline-flex items-center place-self-center'>
                <span> Create </span>
                <PlusCircleIcon
                    className='w-5'
                />
            </Link>
            <Link to='/memes' className='font-extrabold p-3 rounded hover:bg-blue-500 inline-flex items-center place-self-center'>
                <span> View All </span>
                <ViewListIcon
                    className='w-5'
                />
            </Link>
        </nav>
    )
}

export default Navbar;