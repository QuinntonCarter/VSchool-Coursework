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
    allMemes: [],
    userMemes: [{
      url: '',
      initialURL: '',
      userID: '',
      id: ''
    }]
  });
  
  const [ randomMeme, setRandomMeme ] = useState({
    name: '',
    url: '',
    initialURL: '',
    id: ''
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
            createdMemes: res.data
        })
    )
    .catch(err => console.log(err))
  };

  const getMemes = () => {
    fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((response) => {
        const { memes } = response.data
        const memesFit = memes.filter(memes => memes.box_count <= 2)
        const randomMeme = memesFit[Math.floor(Math.random() * 73)]
        setMemes({
            allMemes: memesFit
        })
        setRandomMeme({
            name: randomMeme.name,
            url: randomMeme.url,
            initialURL: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
        })

    })
    .catch(err => console.log(err))
};

  useEffect(() => {
      getCreatedMemes()
      getMemes()
  },[])

  return (
    <div className='grid grid-cols-1 bg-blue-200'>
      <Header/>
      <Routes>
        <Route
          path="/" element={
            <MemeGenerator
              randomMeme={randomMeme}
              setRandomMeme={setRandomMeme}
              createMeme={createMeme}
              setMemes={setMemes}
              memes={memes}/>
          }/>
        <Route
          path="/memes" element={
          <MemesView
            // getCreatedMemes={getCreatedMemes}
            memes={memes.createdMemes}
            setMemes={setMemes}/>
        }/>
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;