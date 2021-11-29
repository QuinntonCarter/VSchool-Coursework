import React, { useState, useEffect, useReducer } from 'react';
import UserMemes from './UserMemes.js';
import MemeForm from '../forms/MemeForm.js';


// change so created memes initially save to localstorage and can
// be submitted to db if so desire. 
// localstorage and edit from localstorage as well before submit
// save id to local storage and able to delete via id from db being saved to localstorage temporarily

// only for state management
const ACTIONS = {
    SAVE_MEME: 'SAVE_MEME',
    REMOVE_MEME: 'REMOVE_MEME',
    EDIT_MEME: 'EDIT_MEME',

}

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
        submitMeme
    } = props

    const localMemes = [JSON.parse(localStorage.getItem('UserMemes'))]


    const [ inputs, setInputs ] = useState(initInputs);
    const [ initLocal , setLocal ] = useState({
        memes: JSON.parse(localStorage.getItem('UserMemes'))
    })

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
                imgSrc: res.data ? res.data.url : randomMeme.imgSrc,
                initialUrl: randomMeme.initialUrl,
                id: randomMeme.id
            }))
        )
        .catch(err => console.log(err))
    };

    function handleSubmit(e){
        e.preventDefault()
        const createdDate = JSON.stringify(new Date()).slice(0,11).replace('"', '')
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
            dispatch({ type: add_meme, payload: { 
                imgSrc: res.data.url.imgSrc,
                
            }})
            setUserMemes(prevState => ([
                ...prevState, {
                    imgSrc: res.data.url,
                    initialUrl: randomMeme.initialUrl,
                    tempID: res.data.page_url.slice(22),
                    _api_id: randomMeme.id,
                    created: createdDate
                },
                // localStorage.setItem('UserMemes', JSON.stringify(prevState))
                // console.log(res.data),
                // console.log(prevState)

            ])),
            setRandomMeme({
                name: randomMeme.name,
                imgSrc: randomMeme.initialUrl,
                initialUrl: randomMeme.initialUrl,
                id: randomMeme.id
            }),
        )
        .then(localStorage.setItem('UserMemes', JSON.stringify(userMemes)))
        .catch(err => console.log(err))
        setInputs(initInputs)
        // *** setUserMemes to localStorage ***
    }



    const getRandom = (e) => {
        e.preventDefault()
        const randomMeme = allMemes[Math.floor(Math.random() * 73)]
        setRandomMeme({
            name: randomMeme.name,
            imgSrc: randomMeme.url,
            initialUrl: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
        })
    };

    // refactor **
    const mappedMemes = (memes) =>  
    memes.imgSrc ? memes.map(meme => 
        <UserMemes
            {...randomMeme}
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
            mappedMemes={mappedMemes}
        />
    ).reverse()
    :
    null

    useEffect(() => {
        const test = () => {

        }
    },)

        return(
            <div className='flex flex-col pb-10 pt-16 overflow-scroll bg-blue-200 w-screen p-3'>
                <MemeForm
                    inputs={inputs}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    getRandom={getRandom}
                />
                    {randomMeme ?
                        <div className='rounded pt-3 p-3'>
                            <h1 className='border-solid border-2 border-navy p-2 text-center bg-white rounded font-normal text-navy'>{randomMeme.name}</h1>
                            <br/>
                            <img className='mx-auto rounded border-white border-4' src={randomMeme.imgSrc} alt='initial-meme' />
                        </div>
                    :
                        <h3> Loading... </h3>
                    }
                    {mappedMemes(localMemes)}
            </div>
        )
}