import React, {Component} from "react"; 
  class Classprops extends Component {

    render()
    {
        return (

            <div>
                <h1> Welcome {this.props.name} from {this.props.country} To Automation Stacks Cafe` </h1>
            </div>
        )


    }
}

export default Classprops