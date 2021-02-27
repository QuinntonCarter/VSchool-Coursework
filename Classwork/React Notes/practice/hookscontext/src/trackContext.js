import React, { useState, useEffect } from 'react';
const TrackContext = React.createContext()

// what if someone released an album through their own personal app?

function TrackContextProvider(props){
    const [track, setTrack] = useState([])

    const songs = [
        {artist: 'Kelela', title: 'Rewind', _id: 'KelelaRewind'},
        {artist: 'Eartheater', title: 'Below The Clavicle', _id: 'eartheaterbelowtheclavicle'},
        {artist: 'Wu-Tang Clan', title: 'Shame On A Nigga', _id: 'wutangclanshameonanigge'},
        {artist: 'GZA feat. RZA', title: 'Pencil', _id: 'gzapencil'},
        {artist: 'Camera Obscura', title: 'Houseboat', _id: 'cameraobscurahouseboat'},
        {artist: 'Drake', title: 'Jungle', _id: 'drakejungle'},
        {artist: 'Kelela', title: 'A Lie', _id: 'kelelaalie'}
    ]

    function loadTracks(){
        setTrack(songs[0])
    }


    useEffect(() => {
        loadTracks()
    }, [])



    return(
        <TrackContext.Provider
            value={{track: track, setTrack, songs}}>
            {props.children}
        </TrackContext.Provider>
    )
}


export {TrackContextProvider, TrackContext}