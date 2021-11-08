import React, { useState, useEffect } from 'react';
import UserMemes from './UserMemes.js';
import axios from 'axios';


function MemeGenerator(){
    const [ memes, setMemes ] = useState([{
        topText: '',
        bottomText: '',
        imgSrc: ''
    }]);

    const [ allMemes, setAllMemes ] = useState([]);
    const [ randomMeme, setRandomMeme ] = useState(null);

    const [ inputs, setInputs ] = useState({
        topText: '',
        bottomText: ''
    });

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };
    
    function handleSubmit(e){
        e.preventDefault()
        // gather prevState into array
        setMemes(prevState => ([
            // add new object with input values to array at named state keys
            ...prevState,{
            topText: inputs.topText,
            bottomText: inputs.bottomText,
            imgSrc: randomMeme.url
        }
        ]))
        setInputs({
            topText: '',
            bottomText: '',
            imgSrc: ''
        })
    };

    function getMemes(){
        fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((response) => {
            const { memes } = response.data
            const randomMeme = memes[Math.floor(Math.random() * 10)]
            setAllMemes(memes)
            // setRandomMeme(randomMeme)
            getCaptionable(randomMeme.id)
        })
        .catch(err => console.log(err))
    };

    function getCaptionable(memeId){
        axios.post(`https://api.imgflip.com/caption_image/template_id=${memeId}`, 
        { params: { username: 'QuinntonCarter', password: 'm3m3t1m3' }})
        .then(res => console.log(res))
    }

    function getRandom(e){
        e.preventDefault()
        const randomMeme = allMemes[Math.floor(Math.random() * 10)]
        setRandomMeme(randomMeme)
    };
        
    const mappedMemes = memes.map(meme => 
        <UserMemes
            topText={meme.topText}
            imgSrc={meme.imgSrc}
            bottomText={meme.bottomText}
        />
    );

    useEffect(() => {
        getMemes();
    },[]);

        return(
            <div className='appDisplay'>
                <form className='meme-form'>
                    <div>
                        <input name='topText' placeholder='Text for box one' value={inputs.topText} onChange={handleChange}/>
                        <input name='bottomText' placeholder='Text for box two' value={inputs.bottomText} onChange={handleChange}/>
                    </div>
                    <button onClick={handleSubmit}> Generate </button>
                    <button onClick={getRandom}> Randomize </button>
                </form>
                    {randomMeme ?
                    <>
                        <h1>{randomMeme.name}</h1>
                        <br/>
                        <img className='randomMeme' src={randomMeme.url} alt='randomMeme' />
                    </>
                    :
                        <h3> Loading... </h3>
                    }
                    <h2> Generated memes will display below! </h2>
                    {mappedMemes}
            </div>
        )
}

export default MemeGenerator;