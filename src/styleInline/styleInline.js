import React, {Component} from "react";
import Radium from 'radium';

class Inline extends Component{
    inline = {
        backgroundColor:'red',
        width:'200px',
        height: '200px',
        "@media (max-width: 800px)": {
            width: '100px',
        },
        ":hover": {
            backgroundColor: 'blue',
        }
    }
    render(){
        return(
            <div style={this.inline}>1</div>
        )
    }
}

export default Radium(Inline);