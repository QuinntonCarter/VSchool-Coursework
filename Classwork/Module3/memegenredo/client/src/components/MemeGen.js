import React, { useState } from 'react';
import UserMemes from './UserMemes.js';
import MemeForm from '../forms/MemeForm.js';

const initInputs = { topText: '', bottomText: '' }

export default function MemeGenerator(props){
    const {
        memes,
        setMemes,
        randomMeme,
        setRandomMeme,
        createMeme,
    } = props

    const [ inputs, setInputs ] = useState(initInputs);

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
                name: randomMeme.name,
                url: res.data ? res.data.url : randomMeme.url,
                initialUrl: randomMeme.initialUrl,
                id: randomMeme.id
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
        .then(res => 
            createMeme({
                imgSrc: res.data.url,
                initialUrl: randomMeme.initialUrl,
                _api_id: randomMeme.id,
                userID: res.data.page_url.slice(22),
            }),
            setRandomMeme({
                name: randomMeme.name,
                url: randomMeme.initialUrl,
                initialUrl: randomMeme.initialUrl,
                id: randomMeme.id
            }),
        )
        .catch(err => console.log(err))
        setInputs(initInputs)
    };

    const getRandom = (e) => {
        e.preventDefault()
        const randomMeme = memes.allMemes[Math.floor(Math.random() * 73)]
        setRandomMeme({
            name: randomMeme.name,
            url: randomMeme.url,
            initialUrl: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
        })
    };

    // refactor **
    const mappedMemes = memes ? memes.map(meme => 
        <UserMemes
            {...randomMeme}
            inputs={inputs}
            handleEdit={handleSubmit}
            handleChange={handleChange}
            memes={memes}
            userID={meme.userID}
            id={meme.id}
            // will be createMeme
            setMemes={setMemes}
            imgSrc={meme.url}
            initialUrl={meme.initialUrl}
        />
    ).reverse()
    :
    null

        return(
            <div className='bg-blue-200 w-screen grid-cols-1 pt-3 p-3'>
                <MemeForm
                    inputs={inputs}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    getRandom={getRandom}
                />
                    {randomMeme ?
                        <div className='rounded pt-7 p-3'>
                            <h1 className='border-solid border-2 border-navy p-4 text-xl text-center bg-white rounded font-normal text-navy'>{randomMeme.name}</h1>
                            <br/>
                            <img className='mx-auto w-full h-auto rounded border-white border-4' src={randomMeme.url} alt='initial-meme' />
                        </div>
                    :
                        <h3> Loading... </h3>
                    }
                    {mappedMemes}
            </div>
        )
}