import React from 'react';

const CallB = (props) => {
    console.log("bb")
    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.change}>ChangeA</button>
        </div>
    );
};

export default React.memo(CallB);