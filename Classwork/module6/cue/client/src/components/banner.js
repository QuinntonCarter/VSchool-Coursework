import { useContext } from 'react';

import { UserContext } from './context/userProvider.js';

export default function Banner() {
    // const { token } = useContext(UserContext);
    // add transform animation that shrinks text to fit in upper left corner of screen
    // when change to profile view or search results return; allows enough space to 
    // view results etc
    return(
        <div className='bannerWrapper'>
            {/* {token ? 
                <header>
                    <h1> Cue </h1>
                </header>
            :
                <img style={{height: '9em'}} className='spotify-logo' src='https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png' alt='spotify logo'/>
            } */}
        </div>
    )
}