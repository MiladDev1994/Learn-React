import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from  'styled-components';



const BDiv = styled.div`
    width:300px;
    margin:10px;
    border-radius:15px;
    overflow:hidden;
    
    height:500px;
    background-color:gray;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    margin:auto;
    margin-top:20px;
    transition:0.3s;
    cursor:pointer;
    :hover{
        box-shadow: 0 0 30px black;
   
    }
`;


const Image = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:300px;
    height:300px;
`;


class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }



    ReNum = () => {
        if (this.state.number > 0){
            this.setState((prevState) =>({
                number: prevState.number - 1,
            }))
        }

    }

    addNum = () => {
        this.setState((prevState) =>({
            number: prevState.number + 1,
        }))
    }

    render() {
        const sum = Number(this.props.price.split(' ')[0]) * this.state.number;
        return(
            <>
                <BDiv>
                    <Image >
                        <img height="100%" width="100%" src={this.props.image}/>
                    </Image>

                    <p style={{padding:"10px"}}><Link to={`/product/${this.props.id}`} style={{textDecoration:"none" , color:"white"}}>{this.props.name}</Link></p>
                    <p>{this.props.price} {this.state.number > 0 ?  " * " + this.state.number + " = " + sum + "$" : ""}</p>
                    <div style={{display: "flex"}}>
                        <i onClick={this.ReNum} style={{opacity: this.state.number < 1 ? '30%' : '100%'}} className="bi-arrow-down-circle h3 d-flex align-items-center justify-content-center p-2"/>
                        <span>{this.state.number}</span>
                        <i onClick={this.addNum}  className="bi-arrow-up-circle h3 d-flex align-items-center justify-content-center p-2"/>
                    </div>
                </BDiv>


            </>
        )
    }
}

export default Contact;