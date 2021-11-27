import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MemeGenerator from './components/MemeGen.js';
import MemesView from './components/MemesView.js';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import axios from 'axios';

export default function App() {
  const [ memes, setMemes ] = useState({
    createdMemes: [],
    allMemes: [],
    userMemes: []
  });
  
  const [ randomMeme, setRandomMeme ] = useState({
    name: '',
    url: '',
    initialUrl: '',
    id: ''
  });

  function createMeme(newmeme){
    setMemes(prevState => ({
        ...prevState, 
          userMemes: [{
                url: newmeme.imgSrc,
                initialUrl: newmeme.initialUrl,
                userID: newmeme.userID,
                id: newmeme._api_id
            }]
        }))
        console.log(newmeme)
    // axios.post(`/db`, newmeme)
    // .then(res => 
    //     setMemes(prevState => ({
    //         ...prevState, 
    //             createdMemes: res.data
    //     }))
    // )
    // .catch(err => console.log(err))
    // .finally(getCreatedMemes())
  };

  function getCreatedMemes(){
    axios.get(`/db`)
    .then(res => {
        setMemes(prevState => ({
          ...prevState,
            createdMemes: res.data
        })
        )
      }
    )
    .catch(err => console.log(err))
  };

  function getMemes(){
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
            initialUrl: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
        })
    })
    .catch(err => console.log(err))
};

  useEffect(() => {
      getMemes()
      getCreatedMemes()
  },[])

  return (
    <div className='h-screen flex flex-col bg-blue-200'>
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
              getCreatedMemes={getCreatedMemes}
              setMemes={setMemes}
              createdMemes={memes.createdMemes}
              />
        }/>
      </Routes>
      <Navbar/>
    </div>
  );
}