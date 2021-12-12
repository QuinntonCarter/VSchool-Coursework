import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './context/appContext';

export const MoodItem = props => {
    const {
        item,
        color
    } = props

    const {
        getPlaylistTracks
    } = useContext(AppContext)

    return item.owner ?
        <div className={`rounded text-xs mb-2 bg-${color}-500 text-cyan-50 p-1`}>
            <Link to={`/results/${item.id}`}>
                <p onClick={() => getPlaylistTracks(item.id)} className={`rounded p-1 bg-${color}-700 text-cyan-50 text-lg`}> {item.name}</p>
                { item.owner && <p className='text-xs'> curated by {item.owner.display_name}</p> }
            </Link>
        </div>
    :
        <div className={`list-item list-decimal list-inside rounded text-xs mb-2 bg-${color}-500 text-cyan-50 p-1`}>
            <p className={`rounded p-1 bg-${color}-700 text-cyan-50 text-lg`}> {item.artists && item.artists.map(artist => `${artist.name} -`)} <span className='text-cerise-400'> {item.name} </span> </p>
            { item.album && <p className={`text-xs rounded p-1  text-cyan-50`}> From '{item.album.name}'</p> }
            <p className={`text-xs text-cerise-100`}> {item.genres && item.genres.map(genre => `${genre} `)} </p>
        </div>
}