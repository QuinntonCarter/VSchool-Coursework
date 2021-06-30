export default function Posts(props){
    const {title, content, imgSrc} = props
    return(
        <div className='postStyle'>
            <img src={imgSrc} alt={imgSrc}/>
            <h1> { title } </h1>
            <p> { content } </p>
            <a href={imgSrc} rel='noreferrer' target='_blank'> 
            <h6 style={{
                color: 'rgb(255, 155, 155)',
            }}
            > view img</h6> </a>
        </div>
    )
}