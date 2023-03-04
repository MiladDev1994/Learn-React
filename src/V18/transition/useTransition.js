import React, {useState , useTransition} from 'react';
import {LOOP} from "./lop";

const UseTransition = () => {

    const [value , setValue] = useState();
    const [number , setNumber] = useState(LOOP())
    const [isPending , startTransition] = useTransition(10);

    const changeHandeler = (e) => {
        setValue(e.target.value)
        startTransition(() => {
            setNumber(LOOP(e.target.value))
        })

        console.log(isPending)
    }
    return (
        <div>
            <input type={"text"} value={value} onChange={changeHandeler} />
            {
                number.map(item => <p key={item} style={{color:"white"}}>{item}</p>)
            }
        </div>
    );
};

export default UseTransition;