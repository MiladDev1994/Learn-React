import React from "react";
import {useState} from "react";

const StateH = () => {

    const [number , setNumber] = useState(0);

    const AddOne = () => {
        setNumber(prevNumber => prevNumber + 1)
    }

    return(
        <>
        <h1> {number} </h1>
        <button onClick={AddOne}>Add One</button>
        </>
    )
}
export default StateH;