import React, { useState } from 'react';

export default function UserMemes(props){
    const { 
        imgSrc,
        key,
        setMemes,
        userID,
        id,
        initialURL
    } = props
    const [ toggleEdit, setToggleEdit ] = useState(false)
    const [ inputs, setInputs ] = useState({
        topText: '',
        bottomText: ''
    });
    const [ imgEditable, setImgEditable ] = useState({
        url: initialURL,
        userID: userID,
        id: id,
        initialURL: initialURL
    })
    // *** error: stop rendering if nothing to render after deletion; on delete at 0 index prevState not iterable error
    const deleteMeme = (id) => {
        setMemes(prevMemes => {
            prevMemes.filter(memes => memes.userID !== id)
        })
    }
    
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
            setImgEditable(prevInputs => ({
                ...prevInputs, 
                url: res.data ? res.data.url : imgEditable.url,
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
    
    const handleEdit = (e) => {
        e.preventDefault()
        const captionData = new FormData();
        captionData.append('username', 'vschoolproject')
        captionData.append('password', 'testing!2021')
        captionData.append('template_id', id)
        captionData.append('text0', inputs.topText)
        captionData.append('text1', inputs.bottomText)
        fetch(`https://api.imgflip.com/caption_image`, {
            method: 'POST',
            body: captionData,
        })
        .then(res => res.json())
        .then((res) => {
            setMemes(prevState => ([
                prevState.filter(memes => memes.userID === userID), {
                url: res.data,
                initialURL: initialURL,
                userID: res.data.page_url.slice(22),
                id: id
            }])
            )}
        )
        .then()
        .finally(
            setToggleEdit(prevState => !prevState),
            // *** on delete at 0 index prevState not iterable error
            // deleteMeme(userID)
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
            <form>
                <img src={imgSrc.url} alt={key}/>
                <button onClick={()=> setToggleEdit(prevState => !prevState)}> edit </button>
                <button onClick={() => deleteMeme(userID)}> delete </button>
            </form>
            :
            <form>
                <img src={imgEditable.url} alt='editableImage'/>
                    <input name='topText' placeholder='Box one text' value={inputs.topText} onChange={handleChangeEdit}/>
                    <input name='bottomText' placeholder='Box two text' value={inputs.bottomText} onChange={handleChangeEdit}/>
                <button onClick={()=> setToggleEdit(prevState => !prevState)}> cancel edit </button>
                <button onClick={handleEdit}> submit edit </button>
            </form>
            }
        </div>
        :
        null
}