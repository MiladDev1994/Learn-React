import React , {useState , useEffect} from "react";

const Effect = () => {

    const [num , detnum] = useState(0);
    const [num2 , detnum2] = useState(0);

    useEffect(() => {
        console.log(num)
        console.log(num2)
    } , [num , num2])


    return(
        <>
            <h1>{num}</h1>
            <button onClick={() => detnum(prevNum => prevNum+1)}>Add</button>
            <br/>
            <br/>
            <br/>
            <h1>{num2}</h1>
            <button onClick={() => detnum2(prevNum => prevNum+1)}>Add</button>
        </>
    )
}
export default Effect;