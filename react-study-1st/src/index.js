import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FoodApp from "./food/FoodApp";
import Counter from './counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Counter />
    //<FoodApp />
    // <App />
);

