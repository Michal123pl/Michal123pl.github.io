import React from 'react';
import ReactDOM from 'react-dom/client';
import './PagesStyles/index.css';
import App from './App.js';
import PrivacyPolicy from './Pages/PrivacyPolicy.js';
import TermsOfUse from './Pages/TermsOfUse.js';
import ServiceWork from './Pages/ServiceWork.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}/>
          <Route path="/TermsOfUse" element={<TermsOfUse />}/>
          <Route path="/ServiceWork" element={<ServiceWork />}/>            
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)