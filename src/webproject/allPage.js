import React, {Component} from "react";
import Banner from "../webproject/banner/banner";
import Cards from "../webproject/card/cards"
import Search from "../webproject/search/search";
import Brand from "../webproject/brand/brand";



class AllPage extends Component{
    render(){
        return(
            <>
                <Banner />
                <Cards />
                <Search />
                <Brand />
            </>
        )
    }
}

export default AllPage;