import { useContext } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import SearchBar from '../components/forms/searchBar.js';

// search view:
//  results details view

export default function Search(){

    return(
        <div className='searchView-Container'>
            Find a friend
            <SearchBar/>
            
        </div>
    )
}