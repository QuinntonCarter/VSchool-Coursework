import { useContext, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { accessToken } from './components/spotify.js';
import { UserContext } from './components/context/userProvider.js';
import ProtectedRoute from './components/protectedRoute.js';
import Banner from './components/banner.js';
import Auth from './Auth.js';
import Main from './views/main.js';

import Navbar from './components/navbar.js';

function App() {
  const { token } = useContext(UserContext)

  return (
    <div className='mainContainer'>
      {console.log(token)}
    <Banner/>
      <Switch>
        <ProtectedRoute
          path='/main/:view'
          redirectTo='/'
          token={token}
          spotifyToken={accessToken}
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
          render={() => token & accessToken ?
            <Main/> 
          :
            <Auth/>
          }
        />
      </Switch>
      {  token & accessToken ? <Navbar /> : null }
    </div>
  );
}

export default App;