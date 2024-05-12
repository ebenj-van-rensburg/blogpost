import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzL0HPO0xI-RJIYAuedYmaFl5HX4V5JIs",
  authDomain: "reactcrud-8cbd0.firebaseapp.com",
  projectId: "reactcrud-8cbd0",
  storageBucket: "reactcrud-8cbd0.appspot.com",
  messagingSenderId: "20620721398",
  appId: "1:20620721398:web:249a8f151d8018944340d7",
  measurementId: "G-PW5E13TBXD"
});

// Initialize Firebase
const analytics = getAnalytics(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();