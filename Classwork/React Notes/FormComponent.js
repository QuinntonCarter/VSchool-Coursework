import React from "react";

// State is managed by parent component so this does not need to be a class component
// !!!! However, since React 16.8, you are now able to manage state in functional 
// components. You will come across this in later modules. It's still good to know 
// class vs. functional components for the purposes of module 3 and for your own 
// knowledge and understanding of React
function FormComponent(props) {

  return (
    <div>
        <form> 
            <input 
                name="firstName" 
                value={props.firstName} 
                placeholder="First Name" 
                onChange={props.handleChange}
            />
            <input 
                name="lastName" 
                value={props.lastName} 
                placeholder="Last Name" 
                onChange={props.handleChange}
            />
            <select name="favoriteColor" value={props.favoriteColor} onChange={props.handleChange}>
                <option value="Pink">Pink</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
            </select>
        </form>

        <h2>Your Information:</h2>

        <p>Your name: {props.firstName} {props.lastName}</p>
        <p>Favorite color: {props.favoriteColor}</p>
    </div>

  );
}

export default FormComponent;
