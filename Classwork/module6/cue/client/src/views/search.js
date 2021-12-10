import { useContext, useState } from 'react';
import { SearchBar } from '../components/forms/searchBar.js';
import { ResultComp } from '../components/resultComp.js';

export const Search = () => {

    return(
        <div className='p-3 pt-4 pr-6 pl-6 pb-10 grid grid-cols-1 text-center'>
            <SearchBar/>
            <ResultComp/>
        </div>
    )
}