import React, { useState, useEffect } from 'react';
import UserMemes from './UserMemes.js';

function MemeGenerator(){
    const [ memes, setMemes ] = useState([{
        url: '',
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
                url: res.data ? res.data.url : randomMeme.url
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
                    userID: res.data.page_url.slice(22),
                    id: randomMeme.id
                }
            ]))
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
            const randomMeme = memesFit[Math.floor(Math.random() * 10)]
            setAllMemes(memesFit)
            setRandomMeme({
                name: randomMeme.name,
                url: randomMeme.url,
                id: randomMeme.id,
                boxes: randomMeme.box_count
            })

        })
        .catch(err => console.log(err))
    };

    const getRandom = (e) => {
        e.preventDefault()
        const randomMeme = allMemes[Math.floor(Math.random() * 10)]
        setRandomMeme({
            name: randomMeme.name,
            url: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
        })
    };
    

    const mappedMemes = memes.map(meme => 
        <UserMemes
            {...randomMeme}
            inputs={inputs}
            handleEdit={handleSubmit}
            handleChange={handleChange}
            memes={memes}
            userID={meme.userID}
            id={meme.id}
            setMemes={setMemes}
            imgSrc={meme.url.url}
            key={meme.url.page_url}
        />
        )

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
                        <img className='randomMeme' src={randomMeme.url} alt={randomMeme.url.page_url} />
                    </>
                    :
                        <h3> Loading... </h3>
                    }
                    {mappedMemes}
            </div>
        )
}

export default MemeGenerator;