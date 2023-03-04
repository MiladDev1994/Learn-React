import React, {Component} from 'react';
import styles from './brand.module.css';

import brand1 from '../../images/11.jpg';
import brand2 from '../../images/12.jpg';
import brand3 from '../../images/13.jpg';

class Brand extends Component{
    render(){
        return(
            <div className={styles.brand}>
                <img src={brand1} />
                <img src={brand2} />
                <img src={brand3} />
            </div>
        )
    }
}

export default Brand;