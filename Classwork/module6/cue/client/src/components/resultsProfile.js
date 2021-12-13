import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from './context/appContext';


export const ResultsProfile = () => {
    const {
        getTracksFeatures,
        playlistTracks,
        found
    } = useContext(AppContext);

    let history = useHistory();

    const mappedTracks = playlistTracks.items && playlistTracks.items.map(item =>
            <p className='list-item list-decimal list-inside' key={item.id}> {item.track.name} </p>
        );

    return(
        <div className='container-main'>
            <button onClick={() => history.goBack()} className='btnbold-small bg-cerise-700 text-sm'> go back </button>
            <div className='container-main text-center bg-navy-700 rounded'>
                <a className='text-4xl p-3' href={`https://open.spotify.com/playlist/${found.id}`}> {found.name} </a>
                {mappedTracks}
                <button onClick={() => getTracksFeatures()} className='btn bg-indigo-700 mt-7'> analyze tracks </button>
            </div>
        </div>
    )
};