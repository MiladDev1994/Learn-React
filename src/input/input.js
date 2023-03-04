import React , { Component } from "react";


class Input extends Component{
    constructor() {
        super();

        this.state = {
            value:'',
            select:'',
        }
    }
    cgangeHandler = (event) => {
        this.setState({
            value: event.target.value,
        })
    }
    select = (event) => {
        this.setState({
            select:event.target.value,
        })

        console.log(event.target.value)
    }

    submit = event => {
        event.preventDefault();
        console.log(event);
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <input type="text" value={this.state.value} onChange={this.cgangeHandler}/>
                <br/>
                <br/>
                <br/>
                <select value={this.state.select} onChange={this.select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Input;