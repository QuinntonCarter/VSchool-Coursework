import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from './context/appContext.js';
import { UserContext } from './context/userProvider.js';
// view user set mood/stats

export const UserProfile = () => {
    const {
        selectedItem
    } = useContext(AppContext);
    const {
        updateFollowStatus,
        userState: { user }
    } = useContext(UserContext);

    const history = useHistory();
    
    const followStatus = user.friends && user.friends.includes(selectedItem._id) ? 'unfollow' : 'follow';

    return(
        <div className='container-main'>
            <button onClick={() => history.goBack()}
                className='bg-cerise-700 text-cyan-50 text-sm font-bold btnbold-small'
            > go back </button>
            <h3 className='text-cyan-50'> {`@${selectedItem.username}`} {selectedItem.created && `created ${selectedItem.created}`} {selectedItem.memberSince && `member since ${selectedItem.memberSince.slice(0,10)}`}  </h3>
            <button className='btn bg-blue-300' onClick={() => updateFollowStatus(selectedItem._id, followStatus)}> {followStatus} </button>
        </div>
    )
};