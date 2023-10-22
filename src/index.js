import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EventBasic from './chap03/EventBasic';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Number オブジェクトのインスタンスメソッドである toLocaleString は、数値を指定したロケールとオプションに応じた形式で文字列に変換した値を取得することができます
root.render(
  <EventBasic type='date'></EventBasic>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
