import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../App.css';
import AboutUs from '../components/aboutUs.js'
import Employers from '../components/employers.js'
import Candidates from '../components/candidates.js'
import Home from '../components/home.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ATP Options </h1>
        </header>
        <p className="App-intro">
        </p>
        <Router>
          <div>
            <ul>
              <li><Link to="/">ATPOptions</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/employers">Employers</Link></li>
              <li><Link to="/candidates">Candidates</Link></li>
            </ul>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/employers" exact component={Employers} />
              <Route path="/candidates" exact component={Candidates} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
