import React , {useState} from "react";
import DocB from "./docB";

export const NameSend = React.createContext();
export const AgeSend = React.createContext();

const DocA = () => {
    const [name , setName] = useState('milad')
    return(
        <div>
            <NameSend.Provider value={name}>
                <AgeSend.Provider value={30}>
                    <DocB />
                </AgeSend.Provider>
            </NameSend.Provider>
        </div>

    )
}
export default DocA;