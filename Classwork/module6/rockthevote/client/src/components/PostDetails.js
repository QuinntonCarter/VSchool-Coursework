import { useHistory } from 'react-router-dom';

export default function PostDetails(){
    const history = useHistory()

    return(
        <>
            <p> it works </p>
            <h1
            onClick={() => history.goBack()}
            style={{cursor: 'pointer'}}
            > back </h1>
        </>
    )
}