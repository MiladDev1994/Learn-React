import React , { Component } from 'react';
import Styles from './navbar.module.css';
import Logo from '../../images/1.jpg';
import {Link} from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <>
                <div className={Styles.navBox}>
                    <ul>
                        <li><Link to="/">home</Link> </li>
                        <li><Link to="/">about</Link> </li>
                        <li><Link to="/">login</Link> </li>
                        <li><Link to="/products">Products</Link> </li>
                    </ul>
                    <img src={Logo} alt="logo" />
                </div>

            </>
        )
    }
}

export default Navbar;