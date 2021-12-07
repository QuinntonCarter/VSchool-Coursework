import { useContext, useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// also doubles as profile view, inlcudes weekly list component
import { getCurrentUserTop } from '../components/spotify.js';
// includes user information from userContext
import { UserContext } from '../components/context/userProvider.js';
import { AppContext } from '../components/context/appContext.js';
import { RecentTracks } from '../components/recentTracks.js';
import { RecentArtists } from '../components/recentArtists.js';

export default function Profile(){
    const {
        user,
        spotifyUser
    } = useContext(UserContext)

    const [ view, setView ] = useState('artists')

    return(
        <div className='p-3 pt-4 pr-6 pl-6 pb-10'>
            <div>
                <h1 style={{color: 'gray'}}> past week top listens (toggle by artist or track) </h1>
                click to view recent top
                <br/>
                <Link to={`/recent_mood_artists`}> 
                    <input className='bg-cyan-200 text-cyan-800 rounded p-1 m-2' type='button' name='viewType' value='artists' onClick={e => setView(e.target.value)} />
                </Link>
                <Link to={`/recent_mood_tracks`}> 
                    <input className='bg-cyan-200 text-cyan-800 rounded p-1 m-2' type='button' name='viewType'  value='tracks' onClick={e => setView(e.target.value)} />
                </Link> 
                <Switch>
                    <Route 
                        path={`/recent_mood_artists`}
                        render={() => 
                            <RecentArtists/>
                    }>
                    </Route>
                    <Route
                        path={`/recent_mood_tracks`}
                        render={() => 
                            <RecentTracks/>
                    }>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}