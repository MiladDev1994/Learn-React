import React, {Component} from 'react';
import styles from './banner.module.css';
import banner from '../../images/10.jpg';
class Banner extends Component{
    render(){
        return(
            <div className={styles.banner}>
                <img src={banner} />
                <div className={styles.text}> Milad  <span>Goli</span></div>
            </div>
        )
    }
}

export default Banner;