import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NativeRoute, Route, Link } from 'react-router-native'

import logo from '../images/logo.svg';
import '../App.css';
import AboutUs from '../components/aboutUs.js'
import Employers from '../components/employers.js'
import Candidates from '../components/candidates.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ATP Options </h1>
        </header>
        <p className="App-intro">
          Index Page
        </p>
        <AboutUs />
        <Employers />
        <Candidates />
      </div>
    );
  }
}

export default App;
