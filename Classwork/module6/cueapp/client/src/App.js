import { useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserContext } from './context/userProvider';

import 'react-spotify-auth/dist/index.css';
import Cookies from 'js-cookie';

import { SpotifyAuth } from 'react-spotify-auth';
// import ResultDetails from './components/resultDetails.js';
import ProtectedRoute from './components/protectedRoute.js';
import Banner from './components/banner.js';
import Auth from './components/Auth.js';
import Main from './views/main.js';
import Profile from './views/profile.js';

function App() {
  const [spotifyToken, setToken] = useState(Cookies.get("spotifyAuthToken"))
  const { token } = useContext(UserContext)

  return (
    <div className='mainContainer'>
    <Banner/>
        <Switch>
          {/* try commented code below if protectedRoute doesn't work */}
          {/* { spotifyToken && token ? 
                <Redirect to='/main'/>

              : */}
                <Route 
                  exact path='/'
                  render={() => spotifyToken ?
                    <Auth
                      loading={false}
                      spotifyToken={spotifyToken}
                    />

                  :
                    <SpotifyAuth
                      redirectUri='http://localhost:3000/auth'
                      clientID='41305753399c4bb1b8bc94072ff3baed'
                      scopes={[
                        'playlist-read-private',
                        'playlist-read-collaborative',
                        'user-read-currently-playing',
                        'user-read-recently-played',
                        'user-read-playback-position',
                        'user-library-read',
                        'user-top-read',
                      ]}
                      onAccessToken={(spotifyToken) => setToken(spotifyToken)}
                    />
                  }
                />
            {/* } */}

          <ProtectedRoute
            exact path='/auth'
            component={Auth}
            redirectTo={() => spotifyToken && token ? '/main' : '/'}
            spotifyToken={spotifyToken}
            token={token}
            loading={false}
          />

          <ProtectedRoute
            exact path='/main'
            component={Main}
            redirectTo='/'
            spotifyToken={spotifyToken}
            loading={false}
          />

          <ProtectedRoute
            exact path='/profile'
            component={Profile}
            redirectTo='/'
            spotifyToken={spotifyToken}
            loading={false}
          />

        </Switch>
    </div>
  );
}

export default App;