import { useHistory } from 'react-router-dom';
import { AppContext } from './context/appContext.js';
// view user set mood/stats

export const UserProfile = props => {
    const {
        username
    } = props

    const history = useHistory()
    
    return(
        <>
            <button onClick={() => history.goBack()}
                className='bg-cerise-700 text-sm text-cyan-50 rounded p-1 m-2 font-bold'
            > go back </button>
            <h3> {username} </h3>
        </>
    )
}