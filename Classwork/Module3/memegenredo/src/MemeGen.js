import React, { useState, useEffect } from 'react';
import UserMemes from './UserMemes.js';

function MemeGenerator(){
    const [ memes, setMemes ] = useState([{
        url: '',
        initialURL: '',
        userID: '',
        id: ''
    }]);

    const [ inputs, setInputs ] = useState({
        topText: '',
        bottomText: ''
    });

    const [ randomMeme, setRandomMeme ] = useState({
        name: '',
        url: '',
        initialURL: '',
        id: ''
    });

    const [ allMemes, setAllMemes ] = useState([]);

    function handleChange(e){
        const { name, value } = e.target
            setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        }), generatePrev()
        );
    };

    const generatePrev = () => {
        const prevImg = new FormData();
        prevImg.append('username', 'vschoolproject')
        prevImg.append('password', 'testing!2021')
        prevImg.append('template_id', randomMeme.id)
        prevImg.append('text0', inputs.topText)
        prevImg.append('text1', inputs.bottomText)
        fetch(`https://api.imgflip.com/caption_image`, {
            method: 'POST',
            body: prevImg,
        })
        .then(res => res.json())
        .then((res) => 
            setRandomMeme(prevInputs => ({
                ...prevInputs,
                url: res.data ? res.data.url : randomMeme.url,
                initialURL: randomMeme.initialURL
            }))
        )
        .catch(err => console.log(err))
    }

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
        .then((res) => 
            setMemes(prevState => ([
                ...prevState, {
                    url: res.data,
                    initialURL: randomMeme.initialURL,
                    userID: res.data.page_url.slice(22),
                    id: randomMeme.id,
                }
            ])),
            setRandomMeme({
                url: randomMeme.initialURL
            })
        )
        .catch(err => console.log(err))
        setInputs({
            topText: '',
            bottomText: ''
        })
    };

    const getMemes = () => {
        fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((response) => {
            const { memes } = response.data
            const memesFit = memes.filter(memes => memes.box_count <= 2)
            const randomMeme = memesFit[Math.floor(Math.random() * 73)]
            setAllMemes(memesFit)
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

    const getRandom = (e) => {
        e.preventDefault()
        const randomMeme = allMemes[Math.floor(Math.random() * 73)]
        setRandomMeme({
            name: randomMeme.name,
            url: randomMeme.url,
            initialURL: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
        })
    };
    

    const mappedMemes = memes ? memes.map(meme => 
        <UserMemes
            {...randomMeme}
            inputs={inputs}
            handleEdit={handleSubmit}
            handleChange={handleChange}
            memes={memes}
            userID={meme.userID}
            id={meme.id}
            setMemes={setMemes}
            imgSrc={meme.url}
            initialURL={meme.initialURL}
        />
        ) 
        :
        null

    useEffect(() => {
        getMemes();
    },[]);

        return(
            <div className='grid-cols-1 bg-blue-200 pt-4 p-3'>
                <form className='grid grid-cols-1 col-start-1 col-end-2'>
                    <div className='grid grid-cols-2'>
                        <input name='topText' placeholder='First text' value={inputs.topText} onChange={handleChange} required/>
                        <input name='bottomText' placeholder='Second text' value={inputs.bottomText} onChange={handleChange} required/>
                    </div>
                    <button className='m-1 p-1 rounded bg-cream' onClick={handleSubmit}> Generate </button>
                    <button className='m-1 p-1 rounded bg-babyBlue' onClick={getRandom}> Randomize </button>
                </form>
                    {randomMeme ?
                    <div className='rounded p-3'>
                        <h1 className='text-2xl text-center text-blue-400'>{randomMeme.name}</h1>
                        <br/>
                        <img className='mx-auto rounded border-4' src={randomMeme.url} alt='initial-meme' />
                    </div>
                    :
                        <h3> Loading... </h3>
                    }
                    {mappedMemes ?
                        <>
                            <h1 className='text-blue-400 text-3xl bg-cream p-4'> Your Memes </h1>
                            {mappedMemes}
                        </>
                        :
                        null
                    
                    }
            </div>
        )
}

export default MemeGenerator;