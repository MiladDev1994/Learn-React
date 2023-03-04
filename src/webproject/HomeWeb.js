import React, {Component} from "react";
import Navbar from "../webproject/navbar/navbar";
import Footer from "../webproject/footer/footer";
import AllPage from './allPage';
import Products from './products/products'
import {Route , Routes} from "react-router-dom";
import Item from "./products/item";

import Styled from 'styled-components';

let Div = Styled.div`
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
`

class HomeWeb extends Component{
    render(){
        return(
            <>

                <Div style={Styled.div}>
                    <Navbar />
                    <Routes>
                        <Route path="/products" element={<Products />} />
                        <Route path="/product/:id" element={<Item />} />
                        <Route path="//*" element={<AllPage />} />
                    </Routes>

                    <Footer />
                </Div>

            </>
        )
    }
}

export default HomeWeb;