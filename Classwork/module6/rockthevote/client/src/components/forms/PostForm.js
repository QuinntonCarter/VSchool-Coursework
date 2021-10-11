import React, { useState } from 'react';

const initInputs = {
    title: '',
    content: '',
    imgSrc: ''
}

export default function PostForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addPost} = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addPost(inputs)
        setInputs(initInputs)
    }

    const { title, content, imgSrc } = inputs

    return(
        <form 
            className='postForm'
            onSubmit={handleSubmit}
        >
            <input
                name='imgSrc'
                value={imgSrc}
                onChange={handleChange}
                placeholder='enter image URL'
                required
            />
            <input
                className='input'
                name='title'
                value={title}
                onChange={handleChange}
                placeholder='enter post title'
                maxLength='35
                '
                required
            />
            <br/>
            <textarea
                name='content'
                value={content}
                onChange={handleChange}
                placeholder='enter post content'
                maxLength='2000'
                required
            />
            <button> create new post </button>
        </form>
    )
}