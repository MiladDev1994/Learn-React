import React , { Component } from "react";

const HOC = (Event , score) =>{
    class newComponent extends Component{
        constructor() {
            super();
            this.state = {
                number: 0,
            }
        }
        change = () => {
            this.setState(prevState => ({
                number: prevState.number + score,
            }))
        }
        render(){
            return <Event number={this.state.number} change={this.change} act={this.props.act}/>
        }
    }

    return newComponent;
}

export default HOC;