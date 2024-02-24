import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./assets/css/index.css";

import App from './App';
import reportWebVitals from './reportWebVitals';

// Root is reference in HTML, and the " <App />" component is from App.js,  that is how our  react app is rendering.  No need to do  anything is this file. In other words,Index.html uses this file, and Index.js uses App.js for actual data.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* From App.js */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
