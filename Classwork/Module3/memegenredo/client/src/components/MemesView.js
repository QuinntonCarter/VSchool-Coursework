export default function MemesView(props){
    const {
        getCreatedMemes,
        createdMemes
    } = props

    
    const mappedMemes = createdMemes ? createdMemes.map(meme => 
        <div className='p-4 px-5' key={meme._id}>
            <h4> {meme.created} </h4>
            <img src={meme.imgSrc} alt={`user meme: ${meme._id}`} />
        </div>
        ).reverse() : getCreatedMemes()

    return(
        mappedMemes ? 
        <div className='pb-16'>
            {mappedMemes}
            <p className='p-2 text-center text-xs font-mono text-navy'> Quinnton Carter 2021 </p>
        </div>
        : 
        <h4> Memes will display here </h4>
    )
}