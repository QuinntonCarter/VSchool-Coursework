import { useEffect } from 'react';

export default function MemesView(props){
    const {
        memes
    } = props

    const mappedMemes = memes.createdMemes.map(meme => 
        <>
            <h4> {meme.created} </h4>
            <img src={meme.imgSrc} alt={meme._id} />
        </>
        )

    // call in memes from db and interate through them here
    return mappedMemes
}
