import React , { Component } from "react";
import styled from 'styled-components';
import Ham from './hamburger';


const Div = styled.div`
    position:fixed;
    width:35px;
    height:35px;
    right:30px;
    top:40px;
    z-index:20;
    display:none;
    cursor:pointer;
    @media(max-width:768px){
        display:block;
    }
    div{
        width:95%;
        height:3px;
        background-color:white;
        border-radius:200px;
        margin:7px 0;
        transform-origin: 3px;
        transition: 0.2s;
        &:nth-child(1){
            transform: ${props => (props.show ? "rotate(45deg)" : "rotate(0)")};
        }
        &:nth-child(2){
            transform:${props => (props.show ? "translateX(-100%)" : "translateX(0)") };
            opacity:${props => (props.show ? 0 : 1) };
        }
        &:nth-child(3){
            transform: ${props => (props.show ? "rotate(-45deg)" : "rotate(0)")};
        }
    }    
`;




class Btn extends Component{
    constructor() {
        super();
        this.state = {
            show:false,
        }
    }

    togle = () => {
        this.setState({
            show: !this.state.show,
        })
    }



    render(){
        return(
            <>
                <Div show={this.state.show} onMouseUp={this.togle}>
                    <div />
                    <div />
                    <div />
                </Div>

                <Ham show={this.state.show} />

            </>
        )
    }
}

export default Btn;