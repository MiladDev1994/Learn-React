import React, {useState , useCallback} from 'react';
import CallA from "./CallA";
import CallB from "./CallB";
const CallBack = () => {

    const [numA , setNumA] = useState("A");
    const [numB , setNumB] = useState("B");

    const changeNumA = useCallback(() => {
        setNumA("AA")

    } , [numA])

    const changeNumB = useCallback(() => {
        setNumB("BB")

    } , [numB])

    return (
        <div>
            <CallA value={numA} change={changeNumA}/>
            <CallB value={numB} change={changeNumB} />
        </div>
    );
};

export default CallBack;