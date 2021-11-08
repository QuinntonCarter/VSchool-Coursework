import React, { useState, useEffect } from 'react';
import UserMemes from './UserMemes.js';


function MemeGenerator(){
    const [ memes, setMemes ] = useState([{
        url: ''
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
    console.log(memes)
    function handleSubmit(e){
        e.preventDefault()
        const captionData = new FormData();
        captionData.append('username', 'vschoolproject')
        captionData.append('password', 'testing!2021')
        captionData.append('template_id', randomMeme.id)
        captionData.append('text0', inputs.topText)
        captionData.append('text1', inputs.bottomText)
        fetch(`https://api.imgflip.com/caption_image`,{
            method: 'POST',
            body: captionData,
        })
        .then(res => res.json())
        // .then(res => console.log(res))
        .then((res) => 
            setMemes(prevState => ([
                // add new object with input values to array at named state keys
                ...prevState,{
                    url: res.data
                }
            ]))
        )
        .catch(err => console.log(err))
        // gather prevState into array
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
            setRandomMeme(randomMeme)
        })
        .catch(err => console.log(err))
    };

    function getRandom(e){
        e.preventDefault()
        const randomMeme = allMemes[Math.floor(Math.random() * 10)]
        setRandomMeme(randomMeme)
    };
        
    const mappedMemes = memes.map(meme => 
        <UserMemes
            imgSrc={meme.url.url}
        />
    );

    useEffect(() => {
        getMemes();
    },[]);

        return(
            <div className='appDisplay'>
                <form className='meme-form'>
                    <div>
                        <input name='topText' placeholder='Box one text' value={inputs.topText} onChange={handleChange}/>
                        <input name='bottomText' placeholder='Box two text' value={inputs.bottomText} onChange={handleChange}/>
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