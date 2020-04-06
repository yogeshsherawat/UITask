import React,{Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbarr from './NavBarComp/Navbarr';
import DataChart from './DataChartComp/DataChart';
import Combine from './donutCharts/Combine';
import Content from './content/Content'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row } from 'react-bootstrap';


function App() {
  
  return (
    <Fragment>
      <Router>
    <Navbarr/>
    <DataChart/>
    <Container fluid>
    <Row style={{marginTop:"20px"}}>
    <Combine/>
    <Content/>
    </Row>
    </Container>
    
    
    
    </Router>
    </Fragment>
    
  );
}

export default App;
