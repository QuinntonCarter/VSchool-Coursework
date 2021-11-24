import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import MemeGenerator from './components/MemeGen.js';
import Navbar from './components/Navbar.js';
import MemesView from './components/MemesView.js';
import axios from 'axios';

function App() {
  const [ memes, setMemes ] = useState({
    createdMemes: [],
    allMemes: []
    // url: '',
    // userID: '',
    // initialURL: '',
    // id: ''
  });

  function createMeme(newmeme){
    axios.post(`/db`, newmeme)
    .then(res => 
        setMemes(prevState => ({
            ...prevState, 
                createdMemes: [res.data]
          }))
    )
    .catch(err => console.log(err))
  };

  function getCreatedMemes(){
    axios.get(`/db`)
    .then(res => 
        setMemes({
            createdMemes: [res.data]
        })
    )
    .catch(err => console.log(err))
  };

  useEffect(() => {
    getCreatedMemes()
  },[])

  return (
    <div className='grid grid-cols-1 bg-blue-200'>
      <Header/>
      <Routes>
        <Route
          path="/" element={
            <MemeGenerator
              createMeme={createMeme}
              setMemes={setMemes}
              memes={memes}/>
          }/>
        <Route
          path="/memes" element={
          <MemesView
          memes={memes}/>
        }/>
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;