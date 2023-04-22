import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Hotels from './views/Hotels';
import Home from './views/Home';
import Flights from './views/Flights';
import Contact from './views/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hotels">
           <Hotels />
          </Route>
		  <Route path="/flights">
           <Flights />
          </Route>
          <Route path="/contact">
           <Contact />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
