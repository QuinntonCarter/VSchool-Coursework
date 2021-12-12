import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from './context/appContext';
// view user set mood/stats

export const UserProfile = props => {
    const {
        selectedItem
    } = useContext(AppContext)

    const history = useHistory()

    return(
        <div className='container-main'>
            <button onClick={() => history.goBack()}
                className='bg-cerise-700 text-cyan-50 text-sm font-bold btnbold-small'
            > go back </button>
            <h3 className='text-cyan-50'> {`@${selectedItem.username}`} {selectedItem.created && `created ${selectedItem.created}`} {selectedItem.memberSince && `member since ${selectedItem.memberSince.slice(0,10)}`}  </h3>
        </div>
    )
}