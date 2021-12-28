friends many to many
playlists many to one
moods one to one

TOS: can't store personal data or spotify user ids,
    + need to implement notice of accessing playlist metadata, notice of accessing account information only up to listening stats, created playlists and associated info/descriptions, linked email, and profile image but not account information for login or any payment info. notify they can delete their mood. accounts at any time.
    + must have links to playlists via spotify
    + playlist images must be square and not altered at all

todo next
    first:
    X   finish user friends' playlist GET
        + playlists
            X   GET friend's and user's lists
            X   POST
        + Mood
            X   POST and overwrite mood
        + users
            -   DELETE user's profile
            X   GET friends' posts
            X   $push friends db ids to array in model
            X   POST remove friend w $pull
            X   POST add friend
        + routing:
    everything else:
    
    styles:

Notes to self:

    // *** functionality for later maybe, from app context ***
    // const [ trackFeatures, setTrackFeatures ] = ([{
    //     danceability: '',
    //     energy: '',
    //     tempo: ''
    // }])

       // ** for later **
    // const getTracksFeatures = async () => {
    //     const trackIdsString = playlistTracks.items.map(item => {
    //         return item.track.id
    //     }).toString()
    //     const { data } = await spotifyUserAPI.get(`/audio-features`, {
    //         params: {
    //             ids: trackIdsString
    //         }
    //     })
    //     return data
    //     // const parseNA = data.audio_features.filter(item => item !== null)
    //     // test(parseNA)
    // };
    //*** later  */ make this into full out analysis; gets features and track analysis ***
    // median tempo, key, loudness.
    // const test = (items) => {
    //     let danceAbility = []
    //     // valence, loudness, tempo, energy, danceability
    //     const verHighDance = items.filter(item => item.danceability >= .75).map(item => item.danceability)
    //     const highDance = items.filter(item => item.danceability >= .65 && item.danceability <= .75).map(item => item.danceability)
    //     const mediumDance = items.filter(item => item.danceability <= .6 && item.danceability >= .4).map(item => item.danceability)
    //     const lowDance = items.filter(item => item.danceability <= .4 && item.danceability >= .2).map(item => item.danceability)
    //     const verLowDance = items.filter(item => item.danceability <= .2).map(item => item.danceability)
    //     danceAbility.push({'extreme': verHighDance.length, 'veryhigh': highDance.length, 'medium':mediumDance.length, 'low':lowDance.length, 'extremelow': verLowDance.length})
    //     Object.values(danceAbility).forEach(val => console.log(val))
    //     // const len = arrSort.length
    //     // const mid = (len / 2)
    //     // const median = len % 2 === 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
    //     // console.log(mid)
    // }