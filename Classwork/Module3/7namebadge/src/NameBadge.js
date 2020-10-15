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
                userCollected: [ ]
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            // gathers prev state and current usercollected data for
            // return/rendering of badge. prepends new data in front of old
            userCollected: [
                prevState, ...this.state.userCollected
                ],
                    firstname: '',
                    lastname: '',
                    email: '',
                    birthplace: '',
                    phone: '',
                    favfood: '',
                    about: '',
            })
        )
    }

    handleChange = (e) => {
        const { name, value } = e.target
            this.setState({
                [name]: value
            }
        )
    }

    handleTel = (e) => {
            if(e.target.value === Number){
                console.log('working')
            }
    }

    render(){
        const mappedDetails = this.state.userCollected.map(details =>
            <div>
                <UserDetails 
                    key = {details.email}
                    firstname={details.firstname} lastname={details.lastname}
                    email={details.email} 
                    birthplace={details.birthplace} 
                    phone={details.phone} 
                    favfood={details.favfood} 
                    aboutme={details.about}
                />
            </div>)



        return(
        <div>
            <div className='badgeinput'>
                <h1> Badge Creator </h1> 
                <form onSubmit={this.handleSubmit} className='badgeform'>
                    <input className='form' type='text' minLength='3' placeholder='First Name' name='firstname' value={this.state.firstname} onChange={this.handleChange} required/>
                    <input className='form' type='text' minLength='3' placeholder='Last Name' name='lastname' value={this.state.lastname} onChange={this.handleChange} required/>
                    <br/>
                    <input className='form' type='email' minLength='3' placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} required/>
                    <input className='form' type='text' minLength='3' placeholder='Birthplace' name='birthplace' value={this.state.birthplace} onChange={this.handleChange} required/>
                    <br/>
                    <input className='form' pattern="[0-9]{3}[0-9]{3}[0-9]{4}" type='tel' minLength='3' maxLength='13' placeholder='Phone Number' name='phone' value={this.state.phone} onChange={this.handleChange} required/>
                    <input className='form' type='text' minLength='3' placeholder='Favorite Food' name='favfood' value={this.state.favfood} onChange={this.handleChange} required/>
                    <br/>
                    <textarea className='form' maxLength='125' placeholder='About Yourself' name='about' value={this.state.about} onChange={this.handleChange} required/>
                    <br/>
                    <button className='button'> Generate Badge </button>
                </form>
            </div>
        {mappedDetails}
    </div>
        )
    }
}

export default NameBadge;