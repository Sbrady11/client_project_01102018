import React, { Component } from 'react';
import '../App.css';
import AboutUs from '../components/aboutUs.js';
import Employers from '../components/employers.js';
import Candidates from '../components/candidates.js';
import Home from '../components/home.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AnimatedRoutes from "../components/animatedRoutes";

/* webpage */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="TopBar">
                <Link to="/" activeClassName="active">ATPOptions</Link>
                <Link to="/about" activeClassName="active">About</Link>
                <Link to="/employers" activeClassName="active">Employers</Link>
                <Link to="/candidates" activeClassName="active">Candidates</Link>
            </div>
            <AnimatedRoutes>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/employers" exact component={Employers} />
              <Route path="/candidates" exact component={Candidates} />
            </AnimatedRoutes>
          </div>
        </Router>
      </div>  
    );
  }
}

export default App;
