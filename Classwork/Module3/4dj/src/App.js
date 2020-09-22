import React from 'react';
import Pads from './Pads';


class App extends React.Component {
  constructor(){
    super()
      this.state = {
          colors: [ 'white','black', 'purple', 'blue']
      }
  }  
  render(){
    return(
        <div>
            <Pads color={this.state.colors[0]}/>
            {/* <Pads color={this.state.colors[1]} /> */}
            {/* <Pads color={this.state.colors[2]}/> */}
            {/* <Pads color={this.state.colors[3]}/> */}
        </div>
    )
  }
}

export default App;