import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../App.css';
import AboutUs from '../components/aboutUs.js'

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
        < AboutUs />
        <p>
        CANDIDATES
        </p>
        <p>
Did you know that the average speed your resume is screened by the corporate recruiter is 7 seconds or less?

Having been in the corporate world for multiple years, our staff consultants know how to help you market your resume to the role of your choice. Secondly, an ally for you should be someone who is transparent about your skills, knows the industry you are in or has colleagues that have personally experienced it. Chances are no one recruiter can be all you have in obtaining the role or new career. We are in the business of aligning relations
</p>


<p>
Hello my name is simon
</p>


      </div>
    );
  }
}

export default App;
