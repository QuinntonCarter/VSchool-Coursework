import { Link, Switch, Route } from 'react-router-dom';
import { UserProfile } from './userProfile';
import { SearchedItem } from './searchedItem.js';

export const ResultDetails = props => {
    const {
        userId,
        username,
        resultId,
        title,
        mood
    } = props
    // useLocation and or useRef/Routematch? idk
    const location = props.username ? 'user' : 'results'
    const id = props.username ? userId : resultId

    return(
        <>
            <Link to={`/${location}/${id}`}> 
                {username || title}
            </Link>
            { mood }
            <Switch>
                <Route
                    path={`/user/:userId`}>
                    <UserProfile username={'username'} />
                </Route>
                <Route
                    path={`/results/:resultId`}
                    render={() => <SearchedItem/> }>
                </Route>
            </Switch>
        </>
    )
}