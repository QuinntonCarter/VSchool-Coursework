export default function Posts(props){
    const {title, content, imgSrc} = props
    return(
        <div className='postStyle'>
            <img src={imgSrc} alt={imgSrc}/>
            <h1> { title } </h1>
            {/* create alt page for viewing full posts on click of this h6 */}
            <p> { content } <h6> view full </h6> </p>
            <a href={imgSrc} rel='noreferrer' target='_blank'> 
            <h6 style={{
                color: 'rgb(255, 155, 155)',
            }}
            > view img</h6> </a>
        </div>
    )
}