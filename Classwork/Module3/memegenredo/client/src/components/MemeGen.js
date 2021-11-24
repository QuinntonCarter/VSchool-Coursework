import React, { useState, useEffect } from 'react';
import UserMemes from './UserMemes.js';
import MemeForm from '../forms/MemeForm.js';

require('dotenv').config();

const initInputs = { topText: '', bottomText: '' }

// ** move some functions to app to pass information between memegen and memeview **

export default function MemeGenerator(props){
    const {
        memes,
        setMemes,
        createMeme
    } = props

    const [ inputs, setInputs ] = useState(initInputs);

    const [ randomMeme, setRandomMeme ] = useState({
        name: '',
        url: '',
        initialURL: '',
        id: ''
    });

    // const [ allMemes, setAllMemes ] = useState([]);

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
                initialURL: randomMeme.initialURL,
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
        .then((res) => 
            createMeme({
                imgSrc: res.data.url,
                initialURL: randomMeme.initialURL,
                _api_id: randomMeme.id
            }),
            // setMemes(prevState => ([
            //     ...prevState, {
            //         url: res.data,
            //         initialURL: randomMeme.initialURL,
            //         userID: res.data.page_url.slice(22),
            //         id: randomMeme.id,
            //     }
            // ])),
            setRandomMeme({
                name: randomMeme.name,
                url: randomMeme.initialURL,
                initialURL: randomMeme.initialURL,
                id: randomMeme.id
            }),
            console.log(randomMeme)
        )
        .catch(err => console.log(err))
        setInputs(initInputs)
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

    const getRandom = (e) => {
        e.preventDefault()
        const randomMeme = memes.allMemes[Math.floor(Math.random() * 73)]
        setRandomMeme({
            name: randomMeme.name,
            url: randomMeme.url,
            initialURL: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
        })
    };
    
    // refactor **
    // const mappedMemes = memes.createdMemes.map(meme => 
    //     <UserMemes
    //         {...randomMeme}
    //         inputs={inputs}
    //         handleEdit={handleSubmit}
    //         handleChange={handleChange}
    //         memes={memes}
    //         userID={meme.userID}
    //         id={meme.id}
    //         // will be createMeme
    //         setMemes={setMemes}
    //         imgSrc={meme.url}
    //         initialURL={meme.initialURL}
    //     />
    // )

    useEffect(() => {
        getMemes();
    },[]);

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
                    {/* refactor w context move */}
                    {/* {mappedMemes.reverse()} */}
            </div>
        )
}