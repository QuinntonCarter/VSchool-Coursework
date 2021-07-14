import { Link, useRouteMatch } from 'react-router-dom';

export default function Posts(props){
    const {title, content, imgSrc, id} = props
    const {url} = useRouteMatch()

    return(
        <div className='postStyle'>
            <img src={imgSrc} alt={imgSrc}/>
            <h1> { title } </h1>
            <p> { content } <h6> <Link to={`/${url}/${id}`}> view full post </Link> </h6> </p>
            <a href={imgSrc} rel='noreferrer' target='_blank'> 
                <h6 style={{
                    color: 'rgb(255, 155, 155)',
                }}
                > view img</h6>
            </a>
        </div>
    )
}