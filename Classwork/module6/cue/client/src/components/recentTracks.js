import { useContext } from 'react';
import { AppContext } from './context/appContext';

export const RecentTracks = () => {
    const {
        monthlyTracks
    } = useContext(AppContext)

    const mappedTracks = monthlyTracks.items ? 
        monthlyTracks.items.map(artist => 
            <>
                <h4> {artist.name} </h4>
            </>
            )
            : 
            null

    return(
        <div className='p-3'>
            {console.log(monthlyTracks)}
            {mappedTracks}
            <p> recent tracks placeholder </p>
        </div>
    )
}