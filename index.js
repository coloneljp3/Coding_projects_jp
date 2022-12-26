import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Boi ,Pagelayout,Mower} from './test.mjs';
import reportWebVitals from './reportWebVitals';
import axios from "axios"
import StripeCheckoutButton from "./services";
import { Service } from './services.jsx';
import {Routes,Route ,BrowserRouter as Router} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Boi />
    <Pagelayout />
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
