// flexbox view of friends posted recent stats

export const PostedMood = props => {
    const {
        items
    } = props

    const mappedItem = items.map(item => 
        <>
            <img src={item.image} alt={item.id}/>
            <h3> {item.selectionName} </h3>
        </>
    )

    return(
        <div>
            {mappedItem}
        </div>
    )
}