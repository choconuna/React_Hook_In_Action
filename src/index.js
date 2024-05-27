import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import reportWebVitals from './reportWebVitals'; // reportWebVitals 함수가 없는 경우 주석 처리

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals(); // reportWebVitals 함수가 없는 경우 주석 처리
