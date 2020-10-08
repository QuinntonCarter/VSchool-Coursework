import React from 'react';
import Pad from './Pad';

class App extends React.Component{
    // create map that sends props/values to pad to assign color/style
    constructor(){
        super()
        this.state = {
                colors: ['white', 'black', 'blue', 'purple']
            }
            this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        // if(name === 'one'){
        // this.setState(colors[0])
        // if(state==='white'){
        //     this.setState('black')
        // }
        // } else if(name === 'one'||'two'){
        //     this.setState()
        // } else if(name === ){

        // }
    }
        
    

    render(){
        return (
            <div className='padcontainer'>
                <Pad name='one' onClick={this.handleClick}/>
                <Pad name='two' onClick={this.handleClick}/>
                {/* <Pad name='three' onClick={this.handleClick}/>
                <Pad name='four' onClick={this.handleClick}/> */}
            </div>
        )
    }
}

export default App;