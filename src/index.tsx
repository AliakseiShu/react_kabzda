import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<App/>,    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let a = {
    name: "Dimych",
    age: 10,
    address: {
        city: "Minsk",
        country: "Belarus"
    }
};

let users = [
    {
        name: "Dimych",
        age: 10,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    },

    {
        name: "Victor",
        age: 13,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    }

]
// console.log(users[1].address.country)

let b: Array<string | number>;
b = [1, 2, 3, 4, 5];
b = [2, 4, 6, 8, 9, 0];
b = ["hi", "no"]
// b = [true, false]
// console.log(b);







