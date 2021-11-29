import React, { useState } from 'react';

// ** finish error handling and display **
export default function UserMemes(props){
    const { 
        imgSrc,
        key,
        userMemes,
        tempID,
        _api_id,
        created,
        initialUrl,
        submitMeme,
        setUserMemes,
    } = props

    const [ toggleEdit, setToggleEdit ] = useState(false)
    const [ toggleSave, setToggleSave ] = useState(false)
    const [ inputs, setInputs ] = useState({
        topText: '',
        bottomText: ''
    });

    const [ imgEditable, setImgEditable ] = useState({
        imgSrc: initialUrl,
        initialUrl: initialUrl,
        tempID: tempID,
        _api_id: _api_id,
        created: created
    })
    
    // *** error: stop rendering if nothing to render after deletion; on delete at 0 index prevState not iterable error
    const deleteMeme = (id) => {
        const newMemes = userMemes.filter(memes => memes.tempID !== id)
        return setUserMemes(newMemes)
    }
    
    const editPrev = () => {
        const prevImg = new FormData();
        prevImg.append('username', 'vschoolproject')
        prevImg.append('password', 'testing!2021')
        prevImg.append('template_id', _api_id)
        prevImg.append('text0', inputs.topText)
        prevImg.append('text1', inputs.bottomText)
        fetch(`https://api.imgflip.com/caption_image`, {
            method: 'POST',
            body: prevImg,
        })
        .then(res => res.json())
        .then((res) => 
            setImgEditable(prevInputs => ({
                ...prevInputs, 
                imgSrc: res.data ? res.data.url : imgEditable.imgSrc,
            }))
        )
        .catch(err => console.log(err))
    }
    
    function handleChangeEdit(e){
        const { name, value } = e.target
            setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        }), editPrev()
        );
    };

    // submits the edit
    const handleEdit = (e, id) => {
        e.preventDefault()
        const createdDate = JSON.stringify(new Date()).slice(1,11)
        const captionData = new FormData();
        captionData.append('username', 'vschoolproject')
        captionData.append('password', 'testing!2021')
        captionData.append('template_id', _api_id)
        captionData.append('text0', inputs.topText)
        captionData.append('text1', inputs.bottomText)
        fetch(`https://api.imgflip.com/caption_image`, {
            method: 'POST',
            body: captionData,
        })
        .then(res => res.json())
        .then((res) => {
            deleteMeme(id)
            setUserMemes(prevState => ([
                ...prevState, {
                    imgSrc: res.data.url,
                    initialUrl: initialUrl,
                    tempID: res.data.page_url.slice(22),
                    _api_id: _api_id,
                    created: createdDate
                },
            ]))
        }
        )
        .finally(
            setToggleEdit(prevState => !prevState))
            // ** finish error handling and display **
        .catch(err => console.log(err))
        setInputs({
            topText: '',
            bottomText: ''
        })
    }

    return(
        <div className='bg-cream p-4'>
            { !toggleEdit ?
                <div className='grid m-auto p-0 h-auto w-auto'>
                    <p className='text-xs'> Local ID: '{tempID}' created: {created} </p>
                    <img src={imgSrc} alt={key}/>
                    <span className='grid-cols-4 inline-grid'>
                        { !toggleSave ? 
                        <>
                            <button className='col-span-1 text-sm m-1 mt-1 p-1 rounded bg-soot text-white' onClick={()=> { setToggleEdit(prevState => !prevState) }}> edit </button>
                            <button className='col-span-1 text-sm m-1 mt-1 p-1 rounded bg-salmon text-gray-700' onClick={() => deleteMeme(tempID)}> delete </button>
                            <button className='col-span-2 text-sm m-1 mt-1 p-1 rounded bg-navy text-white' onClick={() => { setToggleSave(prevState => !prevState) }}> submit </button>
                        </>
                        :
                        <>
                            <button className='col-span-2 text-sm m-1 mt-1 p-1 rounded bg-salmon text-white' onClick={() => { setToggleSave(prevState => !prevState) }}> cancel </button>
                            <button className='col-span-2 text-sm m-1 mt-1 p-1 rounded bg-babyBlue text-white' onClick={() => { submitMeme(imgSrc, initialUrl, _api_id) }}> submit </button>
                            <input className='col-span-4 text-sm' type='text' placeholder='enter alias or name'/>
                        </>
                        }
                    </span>
                </div>
                :
                <div className='m-auto p-0 h-auto w-auto'>
                    <p className='text-xs'> Local ID: '{tempID}' created: {created} </p>
                    <img src={imgEditable.imgSrc} alt='editableImage'/>
                    <span className='grid grid-cols-4'>
                        <button className='col-span-1 text-sm m-2 p-1 rounded bg-salmon text-white' onClick={()=> setToggleEdit(prevState => !prevState)}> cancel </button>
                        <button className='col-span-1 text-sm m-2 p-1 rounded bg-soot text-white' onClick={(e) => handleEdit(e,tempID)}> save </button>
                        <button className='col-span-2 text-sm m-2 p-1 rounded bg-salmon text-gray-700' onClick={() => deleteMeme(tempID)}> delete </button>
                        <input className='col-span-4 text-sm' name='topText' placeholder='Replacement text one' value={inputs.topText} onChange={handleChangeEdit}/>
                        <input className='col-span-4 text-sm' name='bottomText' placeholder='Replacement text two' value={inputs.bottomText} onChange={handleChangeEdit}/>
                    </span>
                </div>
            }
        </div>
        )
}