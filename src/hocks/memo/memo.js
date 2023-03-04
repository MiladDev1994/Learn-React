import React, {useState , useMemo} from "react";

const Memo = () => {

    const [isShowm , setIsShown] = useState(true);
    const[number , setNumber] = useState(0);

    const slow = useMemo(() => {
        for (let i=0; i<10000; i++){console.log(i)}
        return isShowm;
    } , [isShowm])

    const showHandler = () => {
        setIsShown(!isShowm);

    }

    const numberHandler = () => {
        setNumber(prevNumber => prevNumber + 1);
    }

    return(
        <div>
            <button onClick={showHandler}>show - hide</button>
            <span>{slow ? 'show' : 'hide'}</span>
            <br/>
            <button onClick={numberHandler}>show - hide</button>
            <span>{number}</span>
        </div>
    )
}

export default Memo;