import React, {Component} from "react";
import QueryString from 'query-string';


class Blogs extends Component{
    render(){
        console.log(QueryString.parse(this.props.location.search) )
        return(
            <h1>Blogs</h1>
        )
    }
}

export default Blogs;