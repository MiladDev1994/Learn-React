import React, {useEffect, useState} from 'react';
import UseLocalStorage from "./useLocalStorage";

const Main = () => {



    const [name , setName] = UseLocalStorage("name" , "")
    //
    // const AppInputVal = (e) => {
    //     setName(e.target.value);
    // }
    //
    // useEffect(() => {
    //     window.localStorage.setItem('name' , name)
    // })
    //
    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    );
};

export default Main;