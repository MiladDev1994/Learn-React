import React, {Component} from 'react';
import styles from './footer.module.css'
class Footer extends Component{
    render(){
        return(
            <div className={styles.footer}>
                <p>مال خودمه</p>
            </div>
        )
    }
}
export default Footer;