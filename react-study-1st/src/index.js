import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FoodApp from './food/FoodApp';
import Counter from './counter/Counter';
import Say from './counter/Say';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Say />,
  // <Counter />,
  // <FoodApp />
  // <App />
);
