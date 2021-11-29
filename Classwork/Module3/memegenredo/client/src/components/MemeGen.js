import React, { useState } from 'react';
import UserMemes from './UserMemes.js';
import MemeForm from '../forms/MemeForm.js';

const initInputs = { topText: '', bottomText: '' }

export default function MemeGenerator(props){
    const {
        // all memes from DB
        setMemes,
        // all memes from api
        allMemes,
        // all current user's memes
        userMemes,
        setUserMemes,
        randomMeme,
        setRandomMeme,
        // *** for final save of meme to DB ***
        submitMeme,
        handleAuthError
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
        // fetches preview image url
        fetch(`https://api.imgflip.com/caption_image`, {
            method: 'POST',
            body: prevImg,
        })
        .then(res => res.json())
        .then((res) => 
        // sets preview img url to randomMeme imgSrc
            setRandomMeme(prevInputs => ({
                ...prevInputs,
                name: randomMeme.name,
                imgSrc: res.data ? res.data.url : randomMeme.imgSrc,
                initialUrl: randomMeme.initialUrl,
                id: randomMeme.id
            }))
        )
        .catch(err => handleAuthError(err.response.data.errMsg))
    };

    function handleSubmit(e){
        e.preventDefault()
        const createdDate = JSON.stringify(new Date()).slice(1,11).replace('"', '')
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
            // saves to userMemes array until it is submitted to db
            // by submitMeme function
            setUserMemes(prevState => ([
                ...prevState,
                {
                    imgSrc: res.data.url,
                    initialUrl: randomMeme.initialUrl,
                    tempID: res.data.page_url.slice(22),
                    _api_id: randomMeme.id,
                    created: createdDate
                }
                
            ])
            ),
            // sets randomMeme key values to match default image's
            setRandomMeme({
                name: randomMeme.name,
                imgSrc: randomMeme.initialUrl,
                initialUrl: randomMeme.initialUrl,
                id: randomMeme.id
            })
        )
        .catch(err => handleAuthError(err.response.data.errMsg))
        // reset inputs to init
        setInputs(initInputs)
    };

    const getRandom = (e) => {
        e.preventDefault()
        // variabl = finds random number and finds meme at index of that number
        const randomMeme = allMemes[Math.floor(Math.random() * (72)+1)]
        // sets that meme to randomMeme
        setRandomMeme({
            name: randomMeme.name,
            imgSrc: randomMeme.url,
            initialUrl: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
        })
    };

    const mappedMemes = (memeObj) => 
        memeObj.map(meme => 
            <UserMemes
                key={meme.tempID}
                {...randomMeme}
                userMemes={userMemes}
                inputs={inputs}
                handleEdit={handleSubmit}
                handleChange={handleChange}
                submitMeme={submitMeme}
                setUserMemes={setUserMemes}
                setMemes={setMemes}
                tempID={meme.tempID}
                _api_id={meme._api_id}
                imgSrc={meme.imgSrc}
                created={meme.created}
                initialUrl={meme.initialUrl}
            />
        ).reverse()


        return(
            <div className='flex flex-col pb-12 pt-16 overflow-scroll bg-blue-200 w-screen p-3'>
                    <MemeForm
                        inputs={inputs}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        randomMeme={randomMeme}
                        getRandom={getRandom}
                    />
                    { userMemes ? mappedMemes(userMemes) : null }
                <p className='pt-14 text-center text-xs font-mono text-blue-300'> Quinnton Carter 2021 </p>
            </div>
        )
}