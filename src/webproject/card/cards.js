import React , {Component} from 'react';
import styles from './card.module.css';
import Card from "./card";

import ax1 from "../../images/1.jpg";
import ax2 from "../../images/2.jpg";
import ax3 from "../../images/3.jpg";
import ax4 from "../../images/4.jpg";

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            cardy : [
                {id:1 , name:"phone1" , image:ax1 , price:"500$"},
                {id:2 , name:"phone2" , image:ax2 , price:"600$"},
                {id:3 , name:"phone3" , image:ax3 , price:"700$"},
                {id:4 , name:"phone4" , image:ax4 , price:"800$"},
            ],
            num:0,
        }
        // console.log('constructor')
    }
    add = () => {
        this.setState(prevState => ({
            num: prevState.num + 1,
        }))
    }
    componentDidMount() {
        // console.log('mounting')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('Update')
    }

    render(){
        // console.log('render')

        // console.log(this.state.cardy.id)
        return(
            <>
                <div className={styles.cardBox}>

                    {this.state.cardy.map((car)=>(<Card id={car.id} key={car.id} image={car.image} name={car.name} price={car.price} />))}
                    {/*<Card  image={ax1} name="phone1" price="500$"/>*/}
                    {/*<Card  image={ax2} name="phone2" price="600$"/>*/}
                    {/*<Card  image={ax3} name="phone3" price="700$"/>*/}
                    {/*<Card  image={ax4} name="phone4" price="800$"/>*/}
                </div>

                {/*<button onClick={this.add}>{this.state.num}</button>*/}
            </>

        )
    }

}

export default Cards;