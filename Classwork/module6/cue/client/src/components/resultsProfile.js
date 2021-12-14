import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from './context/appContext';


export const ResultsProfile = () => {
    const {
        // setMood,
        playlistTracks,
        found
    } = useContext(AppContext);

    let history = useHistory();

    const mappedTracks = playlistTracks.items && playlistTracks.items.map(item =>
            <p className='list-item list-decimal list-inside text-cerise-200' key={item.id}> {item.track.name} <span className='text-cerise-50 text-xs'> <br/> from {item.track.album.name}  </span> </p>
        );

    return(
        <div className='p-3 pt-4 pr-6 pl-6 mb-20 bg-indigo-900 rounded text-center'>
            <button onClick={() => history.goBack()} className='btnbold-small bg-cerise-700 text-sm'> go back </button>
            <img src={found.images[0].url} alt='playlist'/>
            <div className='container-main text-left p-3 rounded' style={{backgroundColor: 'black'}}>
                <a className='text-3xl p-3 rounded' style={{backgroundColor: 'black'}} href={`https://open.spotify.com/playlist/${found.id}`}> {found.name}
                <i className='fab fa-spotify pl-4' style={{color: '#1DB954', fontSize: '34px'}}/>
                </a>
                {mappedTracks}
                <button className='btn bg-indigo-800 mt-7'> share mood </button>
            </div>
        </div>
    )
};