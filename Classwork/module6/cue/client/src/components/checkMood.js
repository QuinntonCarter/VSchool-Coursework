import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from './context/appContext';

export function CheckMood(){
    const {
        spotifyUserAPI
    } = useContext(AppContext)

    const [ type, setType ] = useState('artists')
    const [ amount, setAmount ] = useState(3)
    const [ timeframe, setTimeframe ] = useState('short_term')
    const [ mood, setMood ] = useState([])

    const history = useHistory()
    
    useEffect(() => {
        spotifyUserAPI.get(`/me/top/${type}`,{
            params: {
                limit: amount,
                time_range: timeframe
            }
        })
        .then(res => setMood(res.data.items))
        .catch(err => console.log(err))
    }, [type, amount, timeframe])

    const mappedMood = mood && mood.map(item =>
    <div className='list-item list-decimal list-inside rounded text-xs mb-2 bg-indigo-800 text-cyan-50 p-1'>
            <p className='rounded p-1 bg-indigo-600 text-cyan-50 text-lg'> {item.artists && item.artists.map(artist => `${artist.name} -`)} <span className='text-cerise-500'> {item.name} </span> </p>
            {item.album && <p className='text-xs rounded p-1  text-cyan-50'> From '{item.album.name}'</p>}
            <p classname='text-xs text-cerise-800'> {item.genres && item.genres.map(genre => `${genre} `)} </p>
        </div>
        )

    return(
        <div className='p-3 pt-4 pb-10 bg-indigo-900 text-cyan-800 rounded m-6'>
            <input className='bg-cyan-100 text-sm text-cyan-800 rounded p-1 m-2 font-bold' type='button' value='go back'
                onClick={() => history.goBack()}/>
            <form className='p-3 text-md text-cocoa-900 grid grid-cols-1 gap-3 pr-6 pl-6'>
                <select className='bg-cerise-200 text-center' onChange={e => setTimeframe(e.target.value)}>
                    <option> - timeframe - </option>
                    <option value='short_term' > monthly </option>
                    <option value='medium_term' > biannual </option>
                    <option value='long_term'> annual </option>
                </select>
                <select className='bg-cerise-200 text-center' onChange={e => setType(e.target.value)}>
                    <option> - type - </option>
                    <option value='artists' > artists </option>
                    <option value='tracks'> tracks </option>
                </select>
                <select className='bg-cerise-200 text-center' onChange={e => setAmount(e.target.value)}>
                    <option> - amount - </option>
                    <option value='3' > top 3 </option>
                    <option value='5'> top 5 </option>
                    <option value='7'> top 7 </option>
                    <option value='10'> top 10 </option>
                    <option value='15'> top 15 </option>
                    <option value='20'> top 20 </option>
                    <option value='25'> top 25 </option>
                    <option value='30'> top 30 </option>
                    <option value='40'> top 40 </option>
                    <option value='50'> top 50 </option>
                </select>
                <input className='bg-cerise-700 text-indigo-50 font-medium text-md rounded p-1 m-2' type='button' value='set mood.'/>
            </form>
            <p className='text-sm text-cerise-700'> top {amount} {type} 
                {timeframe === 'short_term' && ' these past 30 days'} 
                {timeframe === 'medium_term' && ' these past 6 months'}
                {timeframe === 'long_term' && ' the past year'} 
            </p>
            <div className='bg-indigo-900 p-3 rounded'>
            {mappedMood || 'the vibe is off. refresh the page.'}
            </div>
        </div>
    )
}