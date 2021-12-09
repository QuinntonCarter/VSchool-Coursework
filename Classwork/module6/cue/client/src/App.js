import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
// from components
import { accessToken } from './components/spotify.js';
import { UserContext } from './components/context/userProvider.js';
// components
import ProtectedRoute from './components/protectedRoute.js';
import Banner from './components/banner.js';
import Auth from './Auth.js';
import { UserProfile } from './components/userProfile.js';
import { CheckMood } from './components/checkMood.js';
import Navbar from './components/navbar.js';
// views
import Lists from './views/lists.js';
import Profile from './views/profile.js';
import Search from './views/search.js';


function App() {
  const { token } = useContext(UserContext)

  return (
    <div className='bg-navy-900 h-screen overflow-scroll text-emerald-50'>
    <Banner/>
      <Switch>
        <Route
          path='/logout'
          render={Auth}
        />

        <ProtectedRoute
          path='/search/:userID'
          redirectTo='/'
          token={token}
          component={UserProfile}
          loading={false}
        />

        <ProtectedRoute
          path='/search'
          redirectTo='/'
          token={token}
          component={Search}
          loading={false}
        />

        <ProtectedRoute
          path='/check'
          redirectTo='/'
          token={token}
          component={CheckMood}
          loading={false}
        />

        <ProtectedRoute
          exact path='/lists'
          redirectTo='/'
          token={token}
          spotifyToken={accessToken}
          component={Lists}
          loading={false}
        />

        <Route
          path='/'
          render={() => accessToken && token ?
            <Profile spotifyToken={accessToken}/> 
          :
            <Auth/>
          }
        />
      </Switch>
      {  accessToken && token ? <Navbar /> : null }
    </div>
  );
}

export default App;