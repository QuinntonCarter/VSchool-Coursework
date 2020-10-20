import React, { Component } from 'react'

////
// includes depreciated api data, try redoing later by replacing w/ new one
////

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText:'',
            bottomText:'',
            randomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImg:[]
        }
    }

    handleChange = (e) => {
        const { name,value } = e.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImg.length)
        const randMemeImg = this.state.allMemeImg[randNum].url
        this.setState({
            randomImg: randMemeImg
        })
    }

    componentDidMount = () => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then((response) => {
                const { memes } = response.data
                this.setState({
                    allMemeImg: memes
                })
            })
    }

    render(){
        return(
            <div>
                <form className='meme-form'>
                    <input name='topText' placeholder='topText' value={this.state.topText} onChange={this.handleChange} />
                    <input name='bottomText' placeholder='bottomText' value={this.state.bottomText} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}> Generate </button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt='meme tiem'/>
                    <h2 className='top'> {this.state.topText} </h2>
                    <h2 className='bottom'> {this.state.bottomText} </h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;