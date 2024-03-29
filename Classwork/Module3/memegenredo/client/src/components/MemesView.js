export default function MemesView(props){
    const {
        getCreatedMemes,
        memes
    } = props

    
    const mappedMemes = memes ? memes.map(meme => 
        <div className='p-4 px-5' key={meme._id}>
            <h5 className='p-1 bg-blue-400 text-white text-xs'> Created {meme.created.slice(0,10)} by '{meme.alias || meme._id.slice(14)}'</h5>
            <img className='border-blue-400 border-solid border-4' src={meme.imgSrc} alt={`user meme: ${meme._id}`} />
        </div>
        ).reverse() : getCreatedMemes()

    return(
        mappedMemes ? 
        <div className='pt-12 pb-16'>
            {mappedMemes}
            <p className='p-2 text-center text-xs font-mono text-navy'> Quinnton Carter 2021 </p>
        </div>
        : 
        <h4> Memes will display here </h4>
    )
}