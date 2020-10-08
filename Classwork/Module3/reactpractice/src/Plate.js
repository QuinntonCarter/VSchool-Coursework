import React from 'react';
import Food from './Food';

class Plate extends React.Component{
  constructor(){
  super()
    this.state = {
      food:''
    }
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(e){
    this.setState(e.target)
  }

  render(){ 
    return (
      <Food {...this.state.food}/>
  );
}
}

export default Plate;