import { useContext, useEffect } from 'react';
import { AppContext } from './context/appContext';

export const ResultsProfile = () => {
    const {
        getPlaylistTracks,
        playlistTracks,
        found
    } = useContext(AppContext)

    const mappedTracks = playlistTracks.items && playlistTracks.items.map(item =>
        <>
            <p className='list-item list-decimal list-inside'> {item.track.name} </p>
        </>
        )

    // ** for testing **
    useEffect(() => {
        getPlaylistTracks('2nl9SlGjsTme17ffmNpZGp')
    },[])

    return(
        <div className='container-main mb-0 h-screen bg-navy-700'>
            <a className='text-4xl' href={`https://open.spotify.com/playlist/${found.id}`}> {found.name} </a>
            {mappedTracks}
        </div>
    )
}