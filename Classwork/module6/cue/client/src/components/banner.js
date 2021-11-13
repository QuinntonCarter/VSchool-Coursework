import { useContext } from 'react';

import { UserContext } from './context/userProvider.js';

export default function Banner() {
    const { token, spotifyUser } = useContext(UserContext);
    // add transform animation that shrinks text to fit in upper left corner of screen
    // when change to profile view or search results return; allows enough space to 
    // view results etc
    return !spotifyUser ?
    <div className='bannerWrapper'>
            <img src="https://developer.spotify.com/assets/branding-guidelines/logo.png" alt="spotify-logo"/>
    </div>
    :
    <div className='bannerWrapper'>
        <h1> Cue </h1>
    </div>
}