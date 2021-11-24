import { useEffect } from 'react';
import axios from 'axios';

export default function MemesView(props){
    const {
        memes
    } = props

    const mappedMemes = memes.map(meme => 
        <div>
            <h4> {meme.created} </h4>
            <img src={meme.imgSrc} alt={`user meme: ${meme._id}`} />
        </div>
        )

    return mappedMemes.length > 0 ? mappedMemes : <h1> User created memes will display here </h1>
}
