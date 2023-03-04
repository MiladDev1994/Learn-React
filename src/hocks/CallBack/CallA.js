import React from 'react';

const CallA = (props) => {
    console.log("aa")
    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.change}>ChangeA</button>
        </div>
    );
};

export default React.memo(CallA);