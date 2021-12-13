import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './context/appContext';

export const MoodItem = props => {
    const {
        item,
        color
    } = props

    const {
        getPlaylistTracks,
        setFound
    } = useContext(AppContext)

    return item.owner ?
    // for playlist tracks view
        <div onClick={() => setFound(item)} className={`rounded text-xs mb-2 bg-${color}-500 text-cyan-50 p-1`}>
            <Link to={`/results/${item.id}`}>
                <p onClick={() => getPlaylistTracks(item.id)} className={`text-cyan-50 text-lg bg-${color}-700 p-1 rounded`}> {item.name} </p>
            </Link>
                { item.owner && 
                        item.owner.display_name === 'Spotify' ?
                        <div className='p-3' style={{backgroundColor: 'black'}}> 
                            <p className='text-xs'> curated by <span className='font-medium text-md'> Spotify </span> </p>
                            <a href={`https://open.spotify.com/playlist/${item.id}`}> 
                                <span className='font-sans font-medium text-md pr-1'> Listen in Spotify </span>
                                <i className='fab fa-spotify pt-4' style={{color: '#1DB954', fontSize: '34px'}}/>
                            </a>
                        </div> 
                        :
                        <div className='p-3' style={{backgroundColor: 'black'}}> 
                            <p className='text-xs'> curated by </p>
                            {` ${item.owner.display_name}`}
                            <br/>
                            <a href={`https://open.spotify.com/playlist/${item.id}`}> 
                                <span className='p-3' style={{backgroundColor: 'black'}}>
                                    <span className='font-sans font-medium text-md pr-1'> Listen in Spotify </span>
                                    <i className='fab fa-spotify pt-4' style={{color: '#1DB954', fontSize: '34px'}}/>
                                </span>
                            </a>
                        </div>
                        
                } 
        </div>
    :
    // for reusability w other views
        <div className={`list-item list-decimal list-inside rounded text-xs mb-2 bg-${color}-500 text-cyan-50 p-1`}>
            <p className={`rounded p-1 bg-${color}-700 text-cyan-50 text-lg`}> {item.artists && item.artists.map(artist => `${artist.name} -`)} <span className='text-cerise-400'> {item.name} </span> </p>
            { item.album && <p className={`text-xs rounded p-1  text-cyan-50`}> From '{item.album.name}'</p> }
            <p className={`text-xs text-cerise-100`}> {item.genres && item.genres.map(genre => `${genre} `)} </p>
        </div>
}