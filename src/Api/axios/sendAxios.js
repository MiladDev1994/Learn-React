import React, {Component} from "react";
import axios from "axios";

class SendAxios extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            body: '',
        }
    }


    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    send = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts' , {
            title: this.state.text,
            body: this.state.body,
        })
            .then(response => console.log(response.data))
    }
    render(){
        return (
            <>
               <input type={"text"} name={'text'} value={this.state.text} onChange={this.change}/>
               <input type={"text"} name={'body'} value={this.state.body} onChange={this.change}/>
                <button onClick={this.send}>Send</button>
            </>
        )
    }
}

export default SendAxios;