import { useState, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserContext } from './context/userProvider';

import 'react-spotify-auth/dist/index.css';
import Cookies from 'js-cookie';

import { SpotifyAuth } from 'react-spotify-auth';

import ProtectedRoute from './components/protectedRoute.js';
import Banner from './components/banner.js';
import Auth from './components/Auth.js';
import Main from './views/main.js';
import Profile from './views/profile.js';
import Navbar from './components/navbar.js';

function App() {
  const [spotifyToken, setToken] = useState(Cookies.get("spotifyAuthToken"))
  const { cueToken } = useContext(UserContext)

  return (
    <div className='mainContainer'>
    <Banner/>
        <Switch>
                <Route 
                  exact path='/'
                  render={() => spotifyToken ?
                    <Auth/>

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
          {/* <Route
            exact path='/auth'
            component={Auth}
            loading={false}
          /> */}

          <ProtectedRoute
            exact path='/main'
            component={Main}
            //*** */ may cause problem ***
            redirectTo='/'
            token={cueToken}
            loading={false}
          />

          <ProtectedRoute
            exact path='/main/:view'
            redirectTo='/'
            token={cueToken}
            loading={false}
          />

        </Switch>
        { cueToken && spotifyToken ? <Navbar /> : null }
    </div>
  );
}

export default App;