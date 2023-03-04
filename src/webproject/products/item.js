import React from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Item = () =>{
    const params = useParams();

    const get = axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response => console.log(response.data))

        return (
            <h1>
                id : {params.id}
            </h1>
        );
}
export default Item;