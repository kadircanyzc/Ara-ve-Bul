import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BusinessCard from './components/BusinessCard';
import Business from './components/Business';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { LoadScript } from '@react-google-maps/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}></LoadScript>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/BusinessCard"   element={BusinessCard} />
      <Route path="/Business/:id"   element={<Business />}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
