import { useContext } from 'react';
import { AppContext } from './context/appContext';

export const RecentArtists = () => {
    const {
        monthlyArtists
    } = useContext(AppContext)

    const mappedArtists = monthlyArtists.items ? 
        monthlyArtists.items.map(artist =>
        <>
            <li> {artist.name} </li>
                <h6> {artist.genres.map(genre => 
                    <p> {genre} </p>
            )} </h6>
        </>
            )
            : 
            null

    return(
        <div className='p-3'>
            <ol>
                {mappedArtists}
            </ol>
            <p> recent artists placeholder </p>
        </div>
    )
}