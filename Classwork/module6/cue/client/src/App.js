import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
// from components
import { accessToken } from './components/spotify.js';
import { UserContext } from './components/context/userProvider.js';
// components
import ProtectedRoute from './components/protectedRoute.js';
import Banner from './components/banner.js';
import Auth from './Auth.js';
import Navbar from './components/navbar.js';
// views
import Main from './views/main.js';
import Profile from './views/profile.js';


function App() {
  const { token } = useContext(UserContext)

  return (
    <div className='mainContainer'>
    <Banner/>
      <Switch>
        <ProtectedRoute
          path='/main/lists'
          redirectTo='/'
          token={token}
          spotifyToken={accessToken}
          component={Profile}
          loading={false}
        />

        <ProtectedRoute
          exact path='/main'
          redirectTo='/'
          token={token}
          component={Main}
          loading={false}
        />

        <Route
          exact path='/'
          render={() => token && accessToken ?
            <Main/> 
          :
            <Auth/>
          }
        />
      </Switch>
      {  token && accessToken ? <Navbar /> : null }
    </div>
  );
}

export default App;