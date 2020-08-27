import React from "react"

function DestCard(props) {
    return(
        <div> 
            <h1 style= {{color: red}}> 
                Location: {props.location}
            </h1>
            <h3 style= {{color: green}}> 
                Price: {props.price}
            </h3>
            <h3 style= {{color: blue}}>
                Best Time: {props.timeToGo}
            </h3>
        </div>
    )
}

export default DestCard