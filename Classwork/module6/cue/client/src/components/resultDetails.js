import { Link } from 'react-router-dom';

export const ResultDetails = props => {
    const {
        username,
        title
    } = props

    return(
        <>
        <Link> {username  || title} </Link>
        </>
    )
}