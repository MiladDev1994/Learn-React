import React , {Component} from "react";
import styled from 'styled-components';


const Var = styled.div`
width:100px;
height:100px;
background-color: ${props => props.www ? 'blue' : 'red'};
&:hover{
background-color:blue;
cursor:pointer;
}
@media(max-width:800px){
width:500px;
}
`;

// const classTogle = styled.

class InlineTwo extends Component{
    constructor() {
        super();
        this.state = {
            sss: false,
        }
    }
    change = () => {
        this.setState({
            sss: !this.state.sss,
        })
    }
    render(){
        return(
            <>
                <Var www={this.state.sss}>
                    <div>milad Goli</div>
                </Var>
                <button onClick={this.change}>Change</button>
            </>


        )
    }
}

export default InlineTwo;