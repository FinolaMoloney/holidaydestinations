import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Hotels from './views/Hotels';
import Home from './views/Home';
import Contact from './views/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hotels">
           <Hotels />
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
