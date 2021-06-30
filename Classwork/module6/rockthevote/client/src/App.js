import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Auth from './components/Auth.js';
import Profile from './components/Profile.js';
import PostList from './components/PostList.js';

import {UserContext} from './context/UserProvider.js';

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <>
      <Navbar logout={logout}/>
      <div className="app container">
        <Switch>
          <Route
          exact path='/'
          render={()=> token ? <Redirect to='/profile'/>  : <Auth/> }
          />
          <Route
          path ='/profile'
          render={ () => <Profile/> }
          />
          <Route
          path='/posts'
          render={()=> <PostList/>}
          />
        </Switch>
      </div>
    </>
  )
}

export default App;