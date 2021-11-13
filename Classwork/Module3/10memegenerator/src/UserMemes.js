import React, { useState } from 'react';

export default function UserMemes(props){
    // refactor to work as edit function
    const { 
        imgSrc,
        key,
        setMemes,
        userID,
        id
    } = props
    const [ toggleEdit, setToggleEdit ] = useState(false)
    const [ inputs, setInputs ] = useState({
        topText: '',
        bottomText: ''
    });
    // *** error: stop rendering if nothing to render after deletion
    const deleteMeme = (id) => {
        setMemes(prevMemes => {
            prevMemes.filter(memes => memes.userID !== id)
        })
    }
    
    // *** finish implementing this. review what is here already
    const editPrev = () => {
        const prevImg = new FormData();
        prevImg.append('username', 'vschoolproject')
        prevImg.append('password', 'testing!2021')
        prevImg.append('template_id', id)
        prevImg.append('text0', inputs.topText)
        prevImg.append('text1', inputs.bottomText)
        fetch(`https://api.imgflip.com/caption_image`, {
            method: 'POST',
            body: prevImg,
        })
        .then(res => res.json())
        .then((res) => 
            setMemes(prevInputs => ({
                ...prevInputs,
                url: res.data ? res.data.url : imgSrc
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
    // refactor to work as edit function
    const handleEdit = (e) => {
        e.preventDefault()
        const captionData = new FormData();
        captionData.append('username', 'vschoolproject')
        captionData.append('password', 'testing!2021')
        captionData.append('template_id', id)
        captionData.append('text0', inputs.topText)
        captionData.append('text1', inputs.bottomText)
        fetch(`https://api.imgflip.com/caption_image`,{
            method: 'POST',
            body: captionData,
        })
        .then(res => res.json())
        .then((res) => 
            setMemes(prevState => ([
                ...prevState,{
                    url: res.data
                }
            ]))
        )
        .catch(err => console.log(err))
        setInputs({
            topText: '',
            bottomText: '',
            imgSrc: ''
        })
    }

    return imgSrc ?
        <div className='meme'>
            { toggleEdit === false ?
            <>
                <img src={imgSrc} alt={key}/>
                <button onClick={()=> setToggleEdit(prevState => !prevState)}> edit </button>
                <button onClick={() => deleteMeme(userID)}> delete </button>
            </>
            :
            <>
                <h1 style={{color: 'gray'}}> edit view placeholder </h1>
                <div>
                    <img src={imgSrc} alt='editableImage'/>
                        <input name='topText' placeholder='Box one text' value={inputs.topText} onChange={handleChangeEdit}/>
                        <input name='bottomText' placeholder='Box two text' value={inputs.bottomText} onChange={handleChangeEdit}/>
                </div>
                <button onClick={handleEdit}> Generate </button>
            </>
            }
        </div>
        :
        null
}