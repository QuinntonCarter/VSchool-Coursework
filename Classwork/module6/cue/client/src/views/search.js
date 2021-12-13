import { useContext, useEffect } from 'react';
import { AppContext } from '../components/context/appContext.js';
import { SearchBar } from '../components/forms/searchBar.js';
import { ResultComp } from '../components/resultComp.js';

export const Search = () => {
    const {
        setFound
    } = useContext(AppContext)

    return(
        <div className='container-main grid grid-cols-1 text-center'>
            <SearchBar/>
            <ResultComp/>
        </div>
    )
}