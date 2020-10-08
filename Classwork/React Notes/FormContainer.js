import React, { Component } from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
        firstName: "", 
        lastName: "",
        favoriteColor: ""
    };

    this.handleChange = this.handleChange.bind(this)
  }

  /*
   * Sets state for input fields
   */
    handleChange(e) {
        const {value, name} = e.target
        this.setState({
            // [name] is used to reference the name of the input field this 
            // handleChange function is being called by. For further reading look up "computed property names"
            // https://ui.dev/computed-property-names/
            [name]: value
        })
    }

  render() {
    return(
    <div>
      {/* passing arg down via this component */}
        <FormComponent 
            handleChange={this.handleChange}
            {...this.state} 
            // adding spread operator to pass the whole state object to simplify
            // instead of:  
            // firstName = {this.state.firstName}, lastName = {this.state.lastName}, favoriteColor = {this.state.favoriteColor}
            
            // !!!! ANOTHER NOTE:
            // I've read some text online warning about using the spread operator to pass down props. 
            // One reason is that you may pass down unnecessary props.
            // In this case however, everything in our FormContainer state needs to be 
            // passed down to FormComponent, so I'd say it's totally fine to use.
        />
    </div>
    )
  }
}

export default FormContainer;
