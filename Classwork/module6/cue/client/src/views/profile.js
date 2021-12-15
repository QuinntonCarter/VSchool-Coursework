import { useEffect } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import { RecentTracks } from '../components/recentTracks.js';
import { RecentArtists } from '../components/recentArtists.js';
import { CheckMood } from '../components/checkMood.js';
import { AppContext } from '../components/context/appContext.js';

export default function Profile(){
    const history = useHistory();

    useEffect(() => {
        history.push('/recent_mood_artists')
    },[]);

    return(
        <div className='container-main'>
                <span className='text-sm' > set <span className='text-indigo-300'> mood </span> or view more detailed stats  </span>
                <br/>
                <Link to={'/check/moods'}>
                    <input className='bg-indigo-300 text-cyan-800 btn' type='button' value='mood view'/>
                </Link>
                <h1 className='text-sm' style={{color: 'gray'}}> past month top listens </h1>
                {/* <span className='text-sm'> click to view </span> */}
                {/* <br/> */}
                <Link to={`/recent_mood_artists`}> 
                    <input className='bg-cyan-200 text-cyan-800 btn' type='button' value='artists'/>
                </Link>
                <Link to={`/recent_mood_tracks`}> 
                    <input className='bg-cyan-200 text-cyan-800 btn' type='button' value='tracks'/>
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
    )
};