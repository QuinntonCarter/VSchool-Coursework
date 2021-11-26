export default function MemesView(props){
    const {
        getCreatedMemes,
        createdMemes
    } = props

    
    const mappedMemes = createdMemes ? createdMemes.map(meme => 
        <div key={meme._id}>
            <h4> {meme.created} </h4>
            <img src={meme.imgSrc} alt={`user meme: ${meme._id}`} />
        </div>
        ).reverse() : getCreatedMemes()

    return mappedMemes ? mappedMemes : <h4> Memes will display here </h4>
}