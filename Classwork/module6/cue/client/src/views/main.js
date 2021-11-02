import { useContext } from 'react';

import { AppContext } from '../components/context/appContext.js';
import SearchBar from '../components/forms/searchBar.js';
import ResultComp from '../components/resultComp.js';

export default function Main(){
    const { searchQuery } = useContext(AppContext);

    const mappedResults = searchQuery.error ? 
    <div className='errorMsg'> 
        <i style={{fontSize: '1050%', color: 'rgb(201, 200, 200)'}} className="fas fa-volume-mute"/>
        <p> no results in database! <br/> check spelling or try another search. </p> 
    </div>
    : 
    searchQuery.map(results => 
        <>
            <ResultComp 
            album={results.album.title}
            albumImg={results.album.img}
            name={results.artist.name}
            title={results.song_title}
            musicKey={results.key_of}
            bpm={results.tempo}
            genres={results.artist.genres}
            songId={results.song_id}
            key={`${results.artist.id}${results.artist.name}`}
            />
            <hr/>
        </>
        )

    return(
        <div className='resultCompWrapper' >
            <SearchBar/>
            <h1 style={{color: 'gray'}}> main view placeholder </h1>
        </div>
    )
}

// add links to profile and search view