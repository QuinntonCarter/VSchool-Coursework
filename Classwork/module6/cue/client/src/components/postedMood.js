// flexbox view of friends posted recent stats

export const PostedMood = props => {
    const {
        items
    } = props

    const mappedItem = items.map((item, i) => 
        <div className={`flex-1 p-1 text-auto list-item list-inside list-decimal`}>
            <h3 className='text-cerise-500'> {item.selectionName} </h3>
            <img src={item.image} alt={item.id}/>
        </div>
    )

    return(
        <div className='flex flex-wrap'>
            {mappedItem}
        </div>
    )
}