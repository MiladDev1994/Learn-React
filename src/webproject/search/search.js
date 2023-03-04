import React , { Component } from 'react';
import styles from './search.module.css';

class Search extends Component{
    render(){
        return(
            <div className={styles.box}>
                <p>Programmer</p>
                <input className="form-control" type="text" placeholder={"search"}/>
            </div>
        )
    }
}

export default Search;