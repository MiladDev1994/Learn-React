import React, {Component} from "react";
import axios from "axios";
import ComponentAxios from './componentAxios';
import SendAxios from "./sendAxios";

class Axios extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isError: false,
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.setState({
                data: response,
            }))
            .catch(() => (this.setState({isError: true})))

    }

    delete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => console.log(response))
    }

    render(){
        return (
            <>
                <SendAxios />
                {this.state.isError ?
                    <h1>gooooooo</h1>:
                    this.state.data.map(element => <ComponentAxios key={element.id} title={element.title} body={element.body} destroy={() => this.delete(element.id)}/>)}
            </>
            )
    }
}

export default Axios;