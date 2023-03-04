import React , {useEffect } from 'react';
import useTitle from "./UseTitle";

const PageB = () => {

    // useEffect(() => {
    //     document.title = 'B';
    // } , [])

    useTitle("B")

    return (
        <div>
            <h1>Page B</h1>
        </div>
    );
};

export default PageB;