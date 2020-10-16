import React, { Component } from 'react';
import Target from './Target'

class HitList extends Component {
    constructor(){
        super()
        this.state = {
            targets: { }
            // whacked: {}
        }
    }

    // ** doesn't work ** //
    //     componentDidMount() {
    //         fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
    //         .then(response => response.json())
    //         .then(data => {
    //             data.map(target =>
    //                 this.setState({
    //                     targets: target.name
    //                 }))
    //     })
    // }

        componentDidMount() {
            fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data =>
                    this.setState({
                    targets: data
                    })
                )}

    render(){
        // ** doesn't work ** //
        const mappedTargets = this.state.targets.map(target =>
            <div>
                    <Target target = {target.name} />
            </div>
        )

        return(
            <div>
                    {mappedTargets}
                {/* <h6>
                    {this.state.whacked}
                </h6> */}
            </div>
        )
    }
}

export default HitList;