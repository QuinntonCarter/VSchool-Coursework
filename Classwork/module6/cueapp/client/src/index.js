import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider } from './context/appContext';
import { SpotifyApiContext } from 'react-spotify-api';
import UserProvider from './context/userProvider.js'

import Cookies from 'js-cookie';

const token = Cookies.get("spotifyAuthToken")

ReactDOM.render(
  <BrowserRouter>
    <SpotifyApiContext.Provider value={token}>
      <AppContextProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AppContextProvider>
    </SpotifyApiContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);