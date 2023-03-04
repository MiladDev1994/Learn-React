import React , {useState} from "react";

const ObjectH = () => {
    const [data , setdata] = useState({name:"" , age:0});
    return(
        <>
            <input type="text" value={data.name} onChange={event => setdata({...data , name:event.target.value})}/>
            <input type="text" value={data.age} onChange={(event => setdata({...data , age:event.target.value}))}/>
            <h1>{JSON.stringify(data)}</h1>
            {console.log(data)}
        </>
    )
}
export default ObjectH;