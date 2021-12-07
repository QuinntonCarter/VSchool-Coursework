import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './context/appContext.js';

export default function ResultComp(props){
    const { name, songId, albumImg, artist, title, musicKey, bpm, timeSig } = props;
    const { getDetails } = useContext(AppContext);

    useEffect(() => {
        getDetails(songId)
    }, [])

    return(
        <div className='result'>
            <div className='resultsInfo'> 

            </div>
            <Link to='/resultDetails'>

            </Link>
        </div>
    )
}