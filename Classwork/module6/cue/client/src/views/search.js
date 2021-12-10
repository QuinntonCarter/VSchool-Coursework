import { useContext, useState } from 'react';
import { AppContext } from '../components/context/appContext.js';
import { SearchBar } from '../components/forms/searchBar.js';
import ResultComp from '../components/resultComp.js';

export default function Search(){
    const {
    foundUsers,
    searchUser
    } = useContext(AppContext)

    const [ inputs, setInputs ] = useState('');


    function handleSubmit(e){
        e.preventDefault()
        // searchUser(inputs)
        // setInputs('')
        console.log('test')
    }

    return(
        <div className='p-3 pt-4 pr-6 pl-6 pb-10 grid grid-cols-1 text-center'>
            <SearchBar/>
            <ResultComp users={foundUsers}/>
        </div>
    )
}