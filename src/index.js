import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
// import axios, {request} from "axios";
import {BrowserRouter} from 'react-router-dom';
import App from './App'

// axios.interceptors.request.use(
//     request => {
//         console.log(`delivery ${request.url}`);
//         return request;
//     },
//  errore => {
//     return Promise.reject(errore);
// })
//
// axios.interceptors.response.use(
//     response => {
//         return response.data;
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
     );



// for pasee variable from php into react
// root.render(<App {...document.getElementById('root').dataset} />);
