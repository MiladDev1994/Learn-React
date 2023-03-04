import React , {Component} from 'react';
import {Route , Routes} from "react-router-dom";
import Detail from "../detail";

import styles from './card.module.css';



class Card extends Component{
    constructor() {
        super();
        this.state = {
            number:0,
        }
    }

    addNum = () => {
        this.setState((prevState) =>({
            number:prevState.number + 1,
        }))
    }
    ReNum = () => {
        if (this.state.number > 0){
            this.setState((prevState) =>({
                number:prevState.number - 1,
            }))
        }
    }


    render(){
        let sum = Number(this.props.price.replace('$' , '') * (this.state.number)) + '$';
        let {number} = this.state;
        // console.log(this.props)
        return(
            <>
                <div to={`/product/${this.props.id}`} className={styles.card}>
                    <img src={this.props.image} />
                    <p>{this.props.name}</p>
                    <p>{this.props.price} {this.state.number > 0 ?  " * " + number + " = " + sum : ""}</p>
                    <div>
                        <i onClick={this.ReNum} style={{opacity: this.state.number < 1 ? '30%' : '100%'}} className="bi-arrow-down-circle h3 d-flex align-items-center justify-content-center p-2"/>
                        <span>{this.state.number}</span>
                        <i onClick={this.addNum}  className="bi-arrow-up-circle h3 d-flex align-items-center justify-content-center p-2"/>
                    </div>
                </div>

                <div>
                    <Routes>
                    <Route path="/product/:id" element={<Detail />} />
                    </Routes>
                </div>
            </>
        )
    }
}

export default Card ;