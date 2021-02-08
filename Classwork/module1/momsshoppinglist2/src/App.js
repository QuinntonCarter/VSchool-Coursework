import React, { Component } from 'react'

class App extends Component {
    state = {
        itemName: '',
        items: []
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => ({
            items: [...prevState.items, prevState.itemName],
            itemName: ''
        }))
    }



    render(){
        const mappedItems = this.state.items.map(item => {
            return  <div name='list-item' className='list-item'>
                <button className='erase-style' onClick={ (e) => {
                    e.target.parentElement.textContent = ''
                }}> x </button> 
                    {item}
                    </div>})
        return(
                <div>
                    {console.log(this.state.items)}

                    <div className="title-bar">
                    <h1 className="title"> Mom's Shopping List </h1>
                    </div>
                <div className="main">
                    <div className="title-bar">
                        <h3 className="title"> Add Item </h3>
                    </div>
                </div>


                    {/* <!-- item form  --> */}
                    <form name="grocery-form" onSubmit={this.handleSubmit}>
                        <label className="label" for="title"> Item name </label>
                        <input type="text" name="itemName" value={this.state.itemName} onChange={this.handleChange} placeholder="Item" required/>
                        <button id="submit-item"> Submit </button>
                    </form>


                    {/* <!-- list header --> */}
                    <div className="shopping-list">

                        <div className="title-bar">
                            <h3 className="title"> Shopping List </h3>
                        </div>
                        <hr/>


                        {/* <!-- list editor --> */}
                        <div id="list" style={{backgroundColor: 'rgb(122, 215, 255)'}}> 
                            <div id='hook'> {mappedItems} </div>
                        </div>

                </div>
            </div>
        )
    }
}

export default App;