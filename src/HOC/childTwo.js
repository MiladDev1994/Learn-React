import React , { Component } from "react";
import HOC from './HOC'
import styled from 'styled-components';

const Div = styled.div`
    background-color:lightblue;
    display:flex;
    align-items-center;
    justify-content:space-around;
    margin:20px;
`

class ChildT extends Component{

    render(){
        return(
            <Div>
                <h1>{this.props.number}</h1>
                <button onClick={this.props.change}>changeT</button>
                <p>{this.props.act}</p>
            </Div>

        )
    }
}

export default HOC(ChildT , 1);