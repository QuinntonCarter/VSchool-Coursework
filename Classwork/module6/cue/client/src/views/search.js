import { useContext } from 'react';
import SearchBar from '../components/forms/searchBar.js';

// search view:
//  results details view

export default function Search(){

    return(
        <div className='searchView-Container'>
            Find a friend and check their mood
            <SearchBar/>
        </div>
    )
}