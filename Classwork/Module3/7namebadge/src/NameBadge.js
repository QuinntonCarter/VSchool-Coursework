import React, { Component } from 'react';
import UserDetails from './UserDetails';


class NameBadge extends Component{
    constructor() {
        super()
        this.state = {
                firstname: '',
                lastname: '',
                email: '',
                birthplace: '',
                phone: '',
                favfood: '',
                about: '',
                userCollected: [
                    
                    // firstname: 'finn',
                    // lastname: 'jake',
                    // email: 'testing',
                    // birthplace: 'this',
                    // phone: 'out',
                    // favfood: '.',
                    // about: 'yer'
            ]
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            userCollected:[
                prevState.firstname, 
                prevState.lastname, 
                prevState.email, 
                prevState.birthplace,
                prevState.phone,
                prevState.favfood,
                prevState.about
            ]
        })
    )
}

    render(){
        const mappedDetails = this.state.userCollected.map(details =>
            <div>
                <UserDetails 
                name={details.firstname + details.lastname} 
                email={details.email} 
                birthplace={details.birthplace} 
                phone={details} 
                favfood={details.favfood} 
                about={details.aboutme}
                />
            </div>)
        return(
        <div>
            <div className='badgeinput'>
                <form className='badgeform'>
                    <input placeholder='First Name' name='firstname' value={this.state.firstname} />
                    <input placeholder='Last Name' name='lastname' value={this.state.lastname} />
                    <br/>
                    <input placeholder='Email' name='email' value={this.state.email} />
                    <input placeholder='Birthplace' name='birthplace' value={this.state.birthplace} />
                    <br/>
                    <input placeholder='Phone Number' name='phone' value={this.state.phone} />
                    <input placeholder='Favorite Food' name='favfood' value={this.state.favfood} />
                    <br/>
                    <textarea placeholder='About Yourself' name='about' value={this.state.about} />
                    <br/>
                    <button onClick={this.handleSubmit}> Generate Badge </button>
                </form>
            </div>
            {mappedDetails}
        </div>
        )
    }
}

export default NameBadge;