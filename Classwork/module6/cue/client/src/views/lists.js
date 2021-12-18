import { useContext, useEffect } from 'react';
import { AppContext } from '../components/context/appContext.js';
import { UserContext } from '../components/context/userProvider.js';
import ResultComp from '../components/resultComp.js';

// friends' lists
export default function Lists(){
    // const {

    // } = useContext(AppContext)
    const {
        getFriendsStatus,
        userState: {
            user: {
                friends
            }
        }
    } = useContext(UserContext);

    // useEffect(() => {
    //     getFriendsStatus()
    // },[]);

    return(
        <div className='container-main' >
            <h1 style={{color: 'gray'}}> Mood lists posted by friends </h1>
            <button onClick={() => getFriendsStatus()}> test </button>
        </div>
    )
}