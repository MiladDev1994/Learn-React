import React, {Component} from "react";
import {Link } from "react-router-dom";


class Navbar extends Component{
    render(){
        return(
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/blogs'}>Blogs</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/products'}>Products</Link></li>
            </ul>
        )
    }
}

export default Navbar;