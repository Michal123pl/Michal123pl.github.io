import React from 'react';
import ReactDOM from 'react-dom/client';
import './PagesStyles/index.css';
import Home from './Pages/Home.js';
import PriceList from './Pages/PriceList.js';
import Appointment from './Pages/Appointment.js';
import Contact from './Pages/Contact.js';




class App extends React.Component {

  

  render() {
    return (
      <div>
        <Home />
        <PriceList />
        <Appointment />
        <Contact  />
      </div>
  )}
}

export default App;


