import React from 'react';
import {Nav} from 'react-bootstrap';
//import {Link} from 'react-router-dom';

export default function NavBarItem(props){
    return(
        <Nav.Link href="#features">
        <i style={{color:"#339af0", marginLeft:"20px"}}className={"fas fa-"+props.icon}/>
        {props.text}
        </Nav.Link>
        
    );
}