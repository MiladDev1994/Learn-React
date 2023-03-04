import React, {Component} from "react";
import Radium from 'radium';

class ComponentAxios extends Component{
    box = {
        border:'2px solid black',
        padding: '20px',
        margin: '20px',
        borderRadius: '15px',
        boxShadow: '0 0 30px black'
    }

    render(){
        return (
            <>
                <div style={this.box}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.body}</p>
                    <button onClick={this.props.destroy}>Delete</button>
                </div>

            </>
        )
    }
}

export default Radium(ComponentAxios);