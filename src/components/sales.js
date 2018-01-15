import React from 'react';
import AnimatedRoutes from '../components/animatedRoutes';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Customized from '../components/customized.js';
import Talent from '../components/talent.js';
import Applicant from '../components/application.js';
import Acquisition from '../components/acquisition.js';

var divStyle = {
  marginLeft: 160, 
  padding: 0
};


class Sales extends React.Component {
  render() {
    return (
      <div className="page">
          <h1>
            The ATP Options Difference
          </h1>
          <div className="sideNav">
            <Link to='/customized'>Customized Staffing Solutions</Link>
            <Link to='/talent'>Talent Acquisition Solutions-Project Management</Link>
            <Link to='/applicant'>Application Tracking Systems</Link>
            <Link to='/acquisition'>Acquisition of Staffing Companies</Link>
          </div>
          <AnimatedRoutes>
              <Route path="/customized" exact component={Customized} />
              <Route path="/talent" exact component={Talent} />
              <Route path="/applicant" exact component={Applicant} />
              <Route path="/acquisition" exact component={Acquisition} />
          </AnimatedRoutes>
        <div className="pageText" style={divStyle} >
          <h2> Collaboration, Not Automation </h2>
          <p>
            It has become an industry trend to rely on Linked in and MSA’s to cut corners by completely automating the processes. ATP Options Depends on personal interactions and relationships to develop customized staffing and technology solutions to meet YOUR needs.
          </p>
          <p>
            Customized Staffing Solutions Exclusively:
          </p>
          <ul>
            <li>Retained Search</li>
            <li>On Demand Staffing</li>
            <li>Temporary Placement</li>
            <li>Permanent Placement</li>
            <li>Temp to Perm Placement</li>
            <li>Payroll Services for Start-Up</li>
          </ul>
          <p>
            Talent acquisition Solutions-Project Management
          </p>
          <ul>
            <li>Consultation</li>
            <li>Blueprint</li>
            <li>Implementation</li>
            <li>Measurement</li>
          </ul>
          <p>
            Applicant Tracking Systems
          </p>
          <ul>
            <li>Calibration</li>
            <li>Dashboard Development</li>
            <li>SWOT Analysis</li>
          </ul>
          <p>
            acquisition of Staffing Companies
          </p>
        </div>
      </div>
      )
    }
  }
export default Sales;