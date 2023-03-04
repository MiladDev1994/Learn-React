import React from 'react';
import UseTitle from "./UseTitle";

const PageA = () => {

    // useEffect(() => {
    //     document.title = 'A';
    // } , [])

    UseTitle("A")

    return (
        <div>
            <h1>Page A</h1>
        </div>
    );
};

export default PageA;