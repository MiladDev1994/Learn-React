import React, {Component} from "react";
import {Link} from "react-router-dom";


class Products extends Component{
    render(){
        return(
            <>
                <h1>Products</h1>
                <ul>
                    <li><Link to={'/product/1'}>product 1</Link></li>
                    <li><Link to={'/product/2'}>product 2</Link></li>
                    <li><Link to={'/product/3'}>product 3</Link></li>
                    <li><Link to={'/product/4'}>product 4</Link></li>
                </ul>
            </>

        )
    }
}

export default Products;