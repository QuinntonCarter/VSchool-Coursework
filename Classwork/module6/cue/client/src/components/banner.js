import { useContext } from 'react';

import { UserContext } from './context/userProvider.js';

export default function Banner() {
    // const { token } = useContext(UserContext);
    // add transform animation that shrinks text to fit in upper left corner of screen
    // when change to profile view or search results return; allows enough space to 
    // view results etc
    return(
        <div className='bannerWrapper'>
            <h1> Cue </h1>
        </div>
    )
}