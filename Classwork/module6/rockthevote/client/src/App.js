import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Auth from './components/Auth.js';
import Main from './components/Main.js';
import PostList from './components/PostList.js';
import ProtectedRoute from './components/ProtectedRoute.js';
import PostDetails from './components/PostDetails.js';

import {UserContext} from './context/UserProvider.js';

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <>
      {token && <Navbar logout={logout} token={token}/>}
      <div className="app container">
        <Switch>
          <Route
          exact path='/'
          render={()=> token ? <Redirect to='/main'/>  : <Auth/> }
          />

          <ProtectedRoute
          path ='/main'
          component={Main}
          redirectTo='/'
          token={token}
          />
          
          <ProtectedRoute
          exact path='/posts'
          component={PostList}
          redirectTo='/'
          token={token}
          />

          <ProtectedRoute
            path='/posts/:postid'
            component={PostDetails}
            redirectTo='/'
            token={token}
          />
        </Switch>
      </div>
    </>
  )
}

export default App;