import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Hotels from './views/Hotels';
import Home from './views/Home';
import Contact from './views/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Weather from './views/Weather'
import Rental from './views/Rental'
import Flights from './views/Flights';

function App() {
  return (
    <Router>
      <div className='root'>
        <Navbar />
        
			<Route exact path="/">
            <Home />
          </Route>
			<Route path="/hotels">
			<Hotels />
          </Route>
			<Route exact path="/Weather">
            <Weather />
          </Route>
			<Route exact path="/Rental">
            <Rental />
		  </Route>
			<Route path="/flights">
			<Flights />
          </Route>
			<Route path="/contact">
			<Contact />
          </Route>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
