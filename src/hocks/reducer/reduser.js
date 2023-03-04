import React, {useReducer} from "react";

const base = {
    num1 : 0,
    num2 : 0,
};
const reduser = (state , action) => {

    // console.log(action)
    switch (action.type){
        case "up" : return {...state , num1: state.num1 + action.amount};
        case "up2" : return {...state , num2: state.num2 + action.amount};
        case "down" : return {...state , num1: state.num1 - action.amount};
        case "down2" : return {...state , num2: state.num2 - action.amount};
        case "reset" : return {...state , num1: base.num1};
        case "reset2" : return {...state , num2: base.num2};
        default : return state;
    }


}

const Reduser = () => {

    const [number , dispatch] = useReducer(reduser , base);
    return(
        <>
            <h1>{number.num1}</h1>
            <button onClick={() => dispatch({type: "up" , amount:5})}>Up</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
            <button onClick={() => dispatch({type: "down" , amount:3})}>Down</button>

            <br/>
            <br/>
            <br/>
            <h1>{number.num2}</h1>
            <button onClick={() => dispatch({type: "up2" , amount:3})}>Up</button>
            <button onClick={() => dispatch({type: "reset2"})}>Reset</button>
            <button onClick={() => dispatch({type: "down2" , amount:5})}>Down</button>
        </>
    )
}
export default Reduser;