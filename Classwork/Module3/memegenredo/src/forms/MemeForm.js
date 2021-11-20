import { useEffect } from 'react';

export default function MemeForm(props){
    const {
        inputs,
        setInputs,
        handleChange,
        handleSubmit,
        getRandom
    } = props


    return(
        <form className='grid grid-cols-1 col-start-1 col-end-2'>
            <div className='grid grid-cols-2'>
                <input type='text' name='topText' placeholder='First text' value={inputs.topText} onChange={handleChange} required/>
                <input type='text' name='bottomText' placeholder='Second text' value={inputs.bottomText} onChange={handleChange} required/>
            </div>
            <button className='m-1 p-1 rounded-full bg-cream text-indigo-800' onClick={handleSubmit}> Generate </button>
            <button className='m-1 p-1 rounded-full bg-babyBlue text-indigo-800' onClick={getRandom}> Randomize </button>
        </form>
    )
}