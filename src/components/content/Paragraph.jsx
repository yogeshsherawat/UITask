import React from 'react';
import { Badge} from 'react-bootstrap';

function par1(props){
   
    return(
        
        <div style={{marginTop:"20px"}}>
            
            <h6 style={{lineHeight:"70%"}}>{props.text1}<Badge 
            style={{backgroundColor:props.color}}
            variant="secondary">{props.risk}
            </Badge>
            <span 
                style={{float:"right",
                color:props.color}}>
                <strong>
                    {props.value}
                </strong>
             </span>
            <br></br>
            <span style={{marginTop:"1px",fontSize:"10pt", color:"grey"}}>{props.text2}</span>
            </h6>
            
            
        </div>
        

    );

}
export default par1;