import React , {useContext} from "react";
import {NameSend , AgeSend} from "./docA";
import {} from "./docA";

const DocD = () => {
    const name = useContext(NameSend)
    const age = useContext(AgeSend)
    console.log(name)
    return(
        <h1>Welcome : {name} & age : {age} </h1>
    )
}
export default DocD;