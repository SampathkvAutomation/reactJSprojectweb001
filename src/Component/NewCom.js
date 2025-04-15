import React, { Component } from "react";

class Newcom extends Component {
    constructor(props)
    {

        super(props);

        this.state =  {
            message : "Subscribe to Automation Stack Cafe`",
            sub : "Subscribe"
        }

    }

    styles = {

        fontStyle : "italic",
        Color : "purple"
    }

    ButtonChange = () => {
        this.setState({
            message : "Hit the bell Icon to get the notification",
            sub: "Subcribed"
                    });
    }

    render()
    {

        return(
           <div>
           <h3 style={this.styles}>
             {this.state.message}
           </h3>
          <button onClick={this.ButtonChange}>
            {this.state.sub}

          </button>

           </div> 
        );
    }
}

export default Newcom;