import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/userProvider';

import 'react-spotify-auth/dist/index.css';
import Cookies from 'js-cookie';

import ProtectedRoute from './components/protectedRoute.js';
import Banner from './components/banner.js';
import Auth from './components/Auth.js';
import Main from './views/main.js';

import Navbar from './components/navbar.js';

function App() {
  const spotifyToken = Cookies.get("spotifyAuthToken")
  const { token } = useContext(UserContext)

  return (
    <div className='mainContainer'>
    <Banner/>
      <Switch>
        <Route 
          exact path='/'
          render={() => spotifyToken & token ?
            <Redirect to='/main'/>
            :
            <Auth/>
          }
        />

        <Route
          exact path='/auth'
          component={Auth}
          loading={false}
        />

        <Route
          exact path='/main'
          component={Main}
          loading={false}
        />

        <ProtectedRoute
          path='/main/:view'
          redirectTo='/'
          token={token}
          spotifyToken={spotifyToken}
          loading={false}
        />

      </Switch>
      { token & spotifyToken ? <Navbar /> : null }
      <Navbar />
    </div>
  );
}

export default App;