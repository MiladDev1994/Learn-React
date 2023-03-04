import React, {Component} from "react";
import axios from "axios";
import styled from  'styled-components';

const Div = styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-wrap:wrap;
`

const BDiv = styled.div`
    width:300px;
    margin:10px;
    background-color:gray;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin:auto;
    
`


class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            number: 0,
        }
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => this.setState({
                products:response.data,
            }))
    }

    ReNum = (id) => {
        if (this.state.number > 0){
            this.setState((prevState) =>({
                number: prevState.number - 1,
            }))
        }

    }

    addNum = (id) => {
        this.setState((prevState) =>({
            number: prevState.number + 1,
        }))
    }

    render() {
        // console.log(this.state.products)
        return(
            <>
                <Div >
                    {this.state.products.map(product => (
                        <BDiv key={product.id}>
                            <img width="100%" src={product.image}/>
                            <p>{product.title}</p>
                            <p>{product.price} {this.state.number > 0 ?  " * " + this.state.number + " = " + 5 : ""}</p>
                            <div>
                                <i onClick={() => this.ReNum(product.id)} style={{opacity: this.state.number < 1 ? '30%' : '100%'}} className="bi-arrow-down-circle h3 d-flex align-items-center justify-content-center p-2"/>
                                <span>{this.state.number}</span>
                                <i onClick={() => this.addNum(product.id)}  className="bi-arrow-up-circle h3 d-flex align-items-center justify-content-center p-2"/>
                            </div>
                        </BDiv>
                    ))}
                </Div>

            </>
        )
    }
}

export default Contact;