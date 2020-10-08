import React from 'react';


function Food(props){

    return(
        <div>
            <input onSubmit={this.handleClick} type='text'/>
            <p value={props.food}/>
        </div>
    )
}

export default Food;