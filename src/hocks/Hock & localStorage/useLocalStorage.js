import React, {useState , useEffect} from 'react';

const UseLocalStorage = (key , initialVal) => {

    const [value , setValue] = useState(()=> {
        const local = window.localStorage.getItem(key);
        return local ? JSON.parse(local) : initialVal;
    })

    useEffect(() => {
        window.localStorage.setItem(key , JSON.stringify(value))
    } , [value])


    return [value , setValue];
};

export default UseLocalStorage;