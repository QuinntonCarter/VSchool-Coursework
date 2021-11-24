import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import MemeGenerator from './components/MemeGen.js';
import Navbar from './components/Navbar.js';
import MemesView from './components/MemesView.js';

function App() {
  return (
    <div className='grid grid-cols-1 bg-blue-200'>
      <Header/>
      <Routes>
        <Route
          path="/" element={<MemeGenerator/>}
        />
        <Route
          path="/memes" element={<MemesView/>}
        />
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;