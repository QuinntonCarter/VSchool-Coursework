export const PostedList = props => {
    const {
        list
    } = props

    return(
        <div className='border-solid border-2 border-cerise-600 pb-3'>
            <p className='text-sm m-1 p-1'> {list.userString && list.userString} </p>
            <a className='text-sm text-indigo-500 m-1 p-1' href={list.ownerProfile} title='open user in Spotify'> posted by: {list.owner} <br/> {list.name}</a>
            <a href={list.href} title='open playlist in Spotify'>
                <img src={list.image} alt={list.name}/>
                <a href={list.href}> 
                    <span className='p-3' style={{backgroundColor: 'black'}}>
                        <span className='font-sans font-medium text-md pr-1'> Listen in Spotify </span>
                        <i className='fab fa-spotify pt-4' style={{color: '#1DB954', fontSize: '21px'}}/>
                    </span>
                </a>
            </a>
        </div>
    )
};