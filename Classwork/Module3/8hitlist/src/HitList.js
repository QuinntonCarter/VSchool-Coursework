import React, { Component } from 'react';

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
            .then(data => {
                data.map(target => (
                    this.setState({
                        targets: target.name
                    })
                )
                )}
            )}

    render(){
        // ** doesn't work ** //
        // const mappedTargets = this.state.targets.map(target =>
        //         <div>
        //             <ul>
        //                 <li>
        //                     Target: {target.name}
        //                 </li>
        //             </ul>
        //         </div>
        //     )
        return(
            <div>
                <h4>
                    {this.state.targets}
                </h4>
                <h6>
                    {this.state.whacked}
                </h6>
            </div>
        )
    }
}

export default HitList;