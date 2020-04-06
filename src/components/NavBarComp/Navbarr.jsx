import React from 'react';
import NavBarItem from './NavBarItem';
import {Navbar, Nav} from 'react-bootstrap';


const Navbarr=()=>{
    return(
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Navbar.Brand href="#home"><i style={{color:"purple", marginLeft:"20px"}}className={"fas fa-circle"}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <NavBarItem text="Data Library" icon="server"/>
      <NavBarItem text="Workflow" icon="share-alt"/>
      <NavBarItem text="Scheduler" icon="play"/>
      <NavBarItem text="Error Manager" icon="bug"/>
      <NavBarItem text="Notifications" icon="comment-dots"/>
      <NavBarItem text="Reports" icon="chart-line"/>
      </Nav>
    
      </Navbar.Collapse>
      </Navbar>

  );
}
export default Navbarr;