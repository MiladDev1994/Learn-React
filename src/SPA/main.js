import React, {Component} from "react";
 import {Route , Routes} from "react-router-dom";
 import Navbar from './navbar';
import Home from './home';
 import Blogs from './blogs';
 import About from './about';
 import Products from './products';
 import Product from './product';

 class Main extends Component{
     render(){
         return(
             <div>
                 <Navbar />
                 <div>
                     <Routes>
                         <Route path="/product/:id" render={<Product />} />
                         <Route path="/about" render={(props) => <About name="milad" {...props} /> } />
                         <Route path="/blogs" render={<Blogs />} />
                         <Route path="/products" render={<Products />} />
                         <Route path="/" render={<Home />} />
                     </Routes>

                 </div>
             </div>

         )
     }
 }

 export default Main;