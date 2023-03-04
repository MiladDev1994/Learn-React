import React, {Component} from "react";
import ReactDOM from "react-dom";
// import Protal from  'protal'
class Protal extends Component{
    render(){
        return ReactDOM.createPortal(

            <h1>milad</h1>,
            document.getElementById('child')
        )
    }
}

export default Protal