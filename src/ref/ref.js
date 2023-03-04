import React , { Component } from "react";

class Ref extends  Component{

    constructor() {
        super();
        this.input = React.createRef();
    }


    refrence = () => {

        console.log(this.input.current.value)
    }

    componentDidMount() {
        this.input.current.focus();
    }

    render(){
         return(
             <>
                 <input ref={this.input} type="text" />
                 <button onClick={this.refrence}>Ref</button>
             </>

         )
     }
}

export default Ref;