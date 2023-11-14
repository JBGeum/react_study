import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FoodApp from "./food/FoodApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FoodApp />
    // <App />
);

