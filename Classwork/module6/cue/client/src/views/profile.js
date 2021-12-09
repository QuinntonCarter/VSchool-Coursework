import { useContext, useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// also doubles as profile view, inlcudes weekly list component
// includes user information from userContext
import { UserContext } from '../components/context/userProvider.js';
// import { AppContext } from '../components/context/appContext.js';
import { RecentTracks } from '../components/recentTracks.js';
import { RecentArtists } from '../components/recentArtists.js';
import { CheckMood } from '../components/checkMood.js'

export default function Profile(){
    const {
        user,
        spotifyUser
    } = useContext(UserContext)

    return(
        <div className='p-3 pt-4 pr-6 pl-6 pb-10'>
            <div>
                <Link to={'/check/moods'}>
                    <input className='bg-cyan-200 text-cyan-800 rounded p-1 m-2' type='button' value='check longer'/>
                </Link>
                <h1 style={{color: 'gray'}}> past month top listens </h1>
                click to view by
                <br/>
                <Link to={`/recent_mood_artists`}> 
                    <input className='bg-cyan-200 text-cyan-800 rounded p-1 m-2' type='button' value='artists'/>
                </Link>
                <Link to={`/recent_mood_tracks`}> 
                    <input className='bg-cyan-200 text-cyan-800 rounded p-1 m-2' type='button' value='tracks'/>
                </Link>
                <Switch>
                    <Route
                        path={`/check/moods`}
                        render={() => 
                            <CheckMood/>
                    }>
                    </Route>
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