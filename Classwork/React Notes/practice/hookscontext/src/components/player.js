import React, { useState, useContext } from 'react'
import { TrackContext } from '../trackContext.js'



export default function Player(){
    const { songs, track, setTrack } = useContext(TrackContext)
    const [ status, setStatus ] = useState('')

    function play(){
        console.log('play placeholder')
    }

    function pause(){
        console.log('pause placeholder')
        pause('./placeholder_audio_source.wav')
    }

    function skipForward(){
        setTrack(prevTrack => {
            const curIndex = songs.map(function(e) { return e._id }).indexOf(prevTrack._id)
            const nextIndex = curIndex+1
            if (nextIndex+1 > songs.length){
                setStatus('End of playlist')
                return prevTrack
            } else {
            setStatus('')
            const nextSong = songs[nextIndex]
            return nextSong
            }
            
        })
    }

    function skipBackward(){
        setTrack(prevTrack => {
            const curIndex = songs.map(function(e) { return e._id }).indexOf(prevTrack._id)
            if(curIndex === 0){
                setStatus('Start of playlist')
                return prevTrack
            } else {
                setStatus('')
            const prevIndex = curIndex-1
            const prevSong = songs[prevIndex]
            return prevSong
            }
        })
    }

    function reset(){
        setTrack(songs[0])
    }

    return(
        <div>
            <h2 className='trackInfo'> {track.artist} - {track.title} </h2>

            <br/>
            <i onClick={skipBackward} className="fa fas fa-step-backward"></i>
            <i onClick={pause} className="fa far fa-pause-circle"></i>
            <i onClick={play} className="fa far fa-play-circle"></i>
            <i onClick={skipForward} className="fa fas fa-step-forward"></i>
            {!status ? '' : <h3 className='status'> {status} </h3>}
            <h3 onClick={reset} className='reset'> Reset </h3>
        </div>
    )
}