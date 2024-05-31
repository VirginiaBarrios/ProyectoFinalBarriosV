import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPEJD0_UH5-RnTXIHNtkPjROusSytTs2g",
  authDomain: "tienda-las-moras.firebaseapp.com",
  projectId: "tienda-las-moras",
  storageBucket: "tienda-las-moras.appspot.com",
  messagingSenderId: "834633164469",
  appId: "1:834633164469:web:c40fd24aace602d10b40fc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
