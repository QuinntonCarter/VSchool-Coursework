import React, { Component } from 'react';

class HitList extends Component {
    constructor(){
        super()
        this.state = {
            targets: []
        }
    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then((data) => {
                    this.setState({
                    targets: data
                    })
                }
            )
        }

    render(){
        return (
            <div>
                    {this.state.targets.map(target =>
                        <ul>
                            <li>
                                <h3> Target: </h3>
                                <br/>
                                <img src={target.image} height='400px'/>
                                <br/>
                                <br/>
                                Alias: {target.name}
                            </li>
                        </ul>)}
            </div>
        )
    }
}

export default HitList;