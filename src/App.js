import React, {Component} from 'react';
import {BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import AboutUs from './Components/AboutUs';
import OurFeatures from './Components/OurFeatures';
import FAQ from './Components/FAQ';
import Privacy from './Components/Privacy';
import Refund from './Components/Refund';
import Terms from './Components/Terms';
import AppRoutes from './Routes/AppRoutes'
import OurTeam from './Components/OurTeam';
import TryIt from './Components/TryIt';
import ContactUs from './Components/ContactUs';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AppRoutes/>
    </div>
    </BrowserRouter>
  ); 
}

export default App;
