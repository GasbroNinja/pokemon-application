// Import the necessary dependencies, including React, ReactDOM, the App component, the Provider component from the react-redux package, and the Redux store
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store/index";

// Create a root React element using the createRoot function from ReactDOM and select the HTML element with the ID of 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the render method from the root React element to render the App component within the Provider component, passing in the Redux store as a prop
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
