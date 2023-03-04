import React, {Component} from "react";
import styled from 'styled-components';


const Ul = styled.ul`
    display:flex;
    justify-content:start;
    align-items:center;
    list-style:none;
    background-color:white;
    height:50px;
    transition:0.3s;
    @media(max-width:768px){
        position:fixed;
        background-color:#1565df;
        top:0;
        right:0;
        transition:0.3s;
        transform:${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
        height:100vh;
        flex-direction:column;
        padding: 100px 20px;
        color:white;
        width:300px;
    }
    li{
        margin:20px;
    }
`;

const Ham = (props) => {
    return(
        <>
            <Ul show={props.show} >
                <li>home</li>
                <li>milad</li>
                <li>goli</li>
                <li>about</li>
            </Ul>
        </>
    )
}

export default Ham;