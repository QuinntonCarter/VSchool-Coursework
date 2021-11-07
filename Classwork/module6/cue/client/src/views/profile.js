import { useContext } from 'react';
// also doubles as profile view
// inlcudes list components
// includes user information from userContext
import { UserContext } from '../components/context/userProvider.js';


export default function Profile(){
    const {
        user,
        spotifyUser
    } = useContext(UserContext)
    // /pull from mongodb
    const mappedLists = 'first option ternary; if lists? first here if not no lists yet'

    return(
        <div className="listprofileview-Container">
            {console.log(spotifyUser)}
            <select>
                {/* const mappedLists here */}
                <option> - no lists yet - </option>
            </select>
            <br/>
            <i style={{fontSize: '27px'}} className="fab fa-spotify"/> <h3> Spotify: { spotifyUser ? spotifyUser.display_name : null} </h3>
            <h3> Username: @{user.username} </h3>
            <div>
                <h1 style={{color: 'gray'}}> profile/list view placeholder </h1>
                dnd table will go here and lists
            </div>
        </div>
    )
}