import { useContext } from 'react';

import { UserContext } from './context/userProvider.js';

export default function Banner() {
    const { 
        token,
        user,
        spotifyUser
    } = useContext(UserContext);
    // add transform animation that shrinks text to fit in upper left corner of screen
    // when change to profile view or search results return; allows enough space to 
    // view results etc

    
    return !spotifyUser ?
    <div className='bannerWrapper mx-auto'>
        <img src="https://developer.spotify.com/assets/branding-guidelines/logo.png" alt="spotify-logo"/>
    </div>
    :
    <div className='pt-4 pr-4 pl-4 mx-auto'>
        { user ? 
        <div className='grid grid-cols-4 grid-rows-1'>
            <span className='col-span-2 text-sm grid-cols-2 '>
                <h1 className='font-sans text-2xl'> mood. </h1>
                <h3> @{user.username} </h3>
            </span> 
            <span className='col-span-2 text-xs grid-cols-2'>
                <i className='float-right col-span-1 fab fa-spotify text-3xl'/>
                <h3 className='float-right pr-3'> { spotifyUser ? spotifyUser.display_name : 'error: cannot view username'} </h3>
                <img className='float-right h-20 p-4 rounded-full ' src={spotifyUser.images[0].url} alt='spotify-user-img' />
            </span>
        </div>
            :
        <div className='grid grid-cols-4'>
            <span className='col-span-3 text-xs'>
                <i className='float-right col-span-1 fab fa-spotify text-3xl'/>
                <h3 className='float-right pr-3'> { spotifyUser ? spotifyUser.display_name : 'error: cannot view username'} </h3>
                <img className='float-right h-20 p-4 rounded-full ' src={spotifyUser.images[0].url} alt='spotify-user-img' />
            </span>
        </div>
        }
    </div>
}