import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from './context/appContext';
// view user set mood/stats

export const UserProfile = () => {
    const {
        selectedItem
    } = useContext(AppContext)

    const history = useHistory()

    return(
        <>
            <button onClick={() => history.goBack()}
                className='bg-cerise-700 text-sm text-cyan-50 rounded p-1 m-2 font-bold'
            > go back </button>
            <h3 className='text-cyan-50'> {selectedItem.username} </h3>
        </>
    )
}