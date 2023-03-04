import React, {Component} from "react";

class FentchGet extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: [],
            index: 0,
        }
    }




    send = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id.target.value}` , {
            method: "post",
            body: JSON.stringify({
                id: id.target.value,
                title:'milad',
                body: "yes",
                userId: 101,
            }),
            headers: {'content-type': 'application/json; charset=utf-8'}
        })
            .then(response => response.json())
            .then(json => console.log(json))

             console.log(this.state.date)

    }


    delete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id.target.value}` , {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(json => console.log(json))
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({
                date: json,
            }))

    }

    render(){
        return(
            <>
                {this.state.date.map(element => <div key={element.id}>
                    <p>{element.title}</p>
                    <button value={element.id} onClick={this.send}>go</button>
                    <button value={element.id} onClick={this.delete}>delete</button>
                </div>)}
            </>

        )
    }
}

export default FentchGet;