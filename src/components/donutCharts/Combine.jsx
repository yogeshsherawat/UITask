import React,{useState} from 'react';
import BusinessImpact from './BusinessImpact';
import DataQualityIndex from './DataQualityIndex';
import {Col,Card,Button} from 'react-bootstrap';
function Combine(){
    const [now, setnow] = useState(100);
    const handleChangeHigh=()=>{
        setnow(99);
    }
    const handleChangeMed=()=>{
        setnow(75);
    }
    const handleChangeLow=()=>{
        setnow(30);
    }
    return(

            
            <Col sm={4} lg={2} >
            <span style={{marginLeft:"10px"}}><strong>Data Quality Index</strong></span>
            <Card style={{height:"220px"}}>
            <DataQualityIndex  now={81} last={58}/>
            </Card>
            <span style={{marginLeft:"10px"}}><strong>Business Impact</strong></span>
            <Card style={{height:"220px"}}>
            <BusinessImpact  now={now} last={47}/>
            <div style={{display:"inline"}}>
            <Button 
            onClick={handleChangeHigh} 
            style={{marginLeft:"5px",borderRadius:"50%"}} 
            variant="danger">
            High
            </Button>{' '}

            <Button onClick={handleChangeMed}
             variant="warning" 
             style={{backgroundColor:"orange",marginLeft:"5px",borderRadius:"50%"}}>
             Med
            </Button>{' '}

            <Button 
            onClick={handleChangeLow}
            style={{marginLeft:"5px",borderRadius:"50%"}} 
            variant="warning">
            Low
            </Button>{' '}

            </div>
            </Card>
                        
            </Col>
            
            
        
    );
}
export default Combine;