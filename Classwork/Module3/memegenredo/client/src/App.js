import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import MemeGenerator from './components/MemeGen.js';
import Navbar from './components/Navbar.js';

function App() {
  // axios functions here
  

  return (
    <div className='grid grid-cols-1 bg-blue-200'>
      <Routes>
        <Route
        
        />

        <Route

        />
      </Routes>
      <Header/>
      <MemeGenerator/>
      <Navbar/>
    </div>
  );
}

export default App;