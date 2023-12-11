import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FoodApp from './food/FoodApp';
import Counter from './counter/Counter';
import Say from './counter/Say';
import EventPractice from './practice/EventPractice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <EventPractice />,
  // <Say />,
  // <Counter />,
  // <FoodApp />
  // <App />
);
