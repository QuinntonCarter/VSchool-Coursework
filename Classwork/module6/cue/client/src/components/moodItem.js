export const MoodItem = props => {
    const {
        item,
        color
    } = props

    return(
        <div className={`list-item list-decimal list-inside rounded text-xs mb-2 bg-${color}-600 text-cyan-50 p-1`}>
            <p className={`rounded p-1 bg-${color}-800 text-cyan-50 text-lg`}> {item.artists && item.artists.map(artist => `${artist.name} -`)} <span className='text-cerise-500'> {item.name} </span> </p>
            {item.album && <p className={`text-xs rounded p-1  text-cyan-50`}> From '{item.album.name}'</p>}
            <p classname={`text-xs text-cerise-800`}> {item.genres && item.genres.map(genre => `${genre} `)} </p>
        </div>
    )
}