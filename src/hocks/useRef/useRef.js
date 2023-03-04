import React , {useRef , useEffect , useState} from 'react';

const UseRef = () => {

    const input = useRef();
    const [value , setValue] = useState("")

    useEffect(() => {
        console.log(input.current.type)
    } , [])

    const change = (e) => {
        setValue(e.target.value)

    }
    console.log(value)
    return (
        <div>
           <input ref={input} type="text" value={value} onChange={change}/>
        </div>
    );
};

export default UseRef;