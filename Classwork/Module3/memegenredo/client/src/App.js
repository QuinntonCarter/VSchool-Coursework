import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MemeGenerator from './components/MemeGen.js';
import MemesView from './components/MemesView.js';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import axios from 'axios';

export default function App() {
  // all memes from the app's DB
  const [ memes, setMemes ] = useState([]);
  // all api memes
  const [ allMemes, setAllMemes ] = useState([]);
  // all memes created by current user
  const [ userMemes, setUserMemes ] = useState([]);
  // initial meme for editing
  const [ randomMeme, setRandomMeme ] = useState({
    name: '',
    imgSrc: '',
    initialUrl: '',
    id: ''
  });
// GET memes from DB
  function getCreatedMemes(){
    axios.get(`/db`)
    .then(res => {
        setMemes(res.data)
      }
    )
    .catch(err => console.log(err))
  };
  // FETCH/GET memes for editing
  function getMemes(){
    fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((response) => {
        const { memes } = response.data
        const memesFit = memes.filter(memes => memes.box_count <= 2)
        const randomMeme = memesFit[Math.floor(Math.random() * 100)]
        setAllMemes(memesFit)
        setRandomMeme({
            name: randomMeme.name,
            imgSrc: randomMeme.url,
            initialUrl: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
        })
    })
    .catch(err => console.log(err))
};

// refactor this into submit to db function:
function submitMeme(source, url, id, alias){
  const submittedMeme = {
      imgSrc: source,
      initialUrl: url,
      _api_id: id,
      alias: alias
  }
  axios.post(`/db`, submittedMeme)
  .then(res => 
      setMemes(prevState => ([...prevState, res.data]))
  )
  .catch(err => console.log(err))
  .finally(getCreatedMemes())
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
              // for submit meme to DB
              submitMeme={submitMeme}
              // all memes from DB
              memes={memes}
              setMemes={setMemes}
              // all from api
              allMemes={allMemes}
              setAllMemes={setAllMemes}
              // all current user's memes
              userMemes={userMemes}
              setUserMemes={setUserMemes}/>
          }/>
        <Route
          path="/memes" element={
            <MemesView
              getCreatedMemes={getCreatedMemes}
              memes={memes}
              setMemes={setMemes}
              userMemes={userMemes}
              allMemes={allMemes}
              />
        }/>
      </Routes>
      <Navbar/>
    </div>
  );
}