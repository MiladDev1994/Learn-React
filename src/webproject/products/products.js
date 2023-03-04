import React, {Component} from "react";
import Product from './product';
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
    display:flex;
    width:100%;
    height:100%;
    flex-wrap:wrap;
    margin:15px;
`

class Products extends Component{

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => this.setState({
                products:response.data,
            }))
    }

    render() {
        return(
            <>
                <Div>
                    {!this.state.products.length ?
                        <h1>درحال لود کردن</h1>:
                        this.state.products.map(product => (
                            <Product key={product.id} name={product.title} id={product.id} image={product.image} price={`${product.price} $`}/>
                    ))}
                </Div>

            </>

        )
    }
}

export default Products;