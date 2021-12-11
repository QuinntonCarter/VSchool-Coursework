import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './context/appContext.js';

export const ResultDetails = props => {
    const {
        userId,
        username,
        resultId,
        title,
        mood
    } = props

    const {
        getSelection
    } = useContext(AppContext)

    // useLocation and or useRef/Routematch? idk
    const location = props.username ? 'user' : 'results'
    const id = props.username ? userId : resultId

    return(
        <div onClick={() => getSelection(id, location)}>
            <Link to={`/${location}/${id}`}> 
                {username || title}
            </Link>
            { mood }
        </div>
    )
}