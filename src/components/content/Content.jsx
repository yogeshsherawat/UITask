import React, { Fragment } from 'react';
import {Col,Card, Container} from 'react-bootstrap';
import file from './file';
import Paragraph from './Paragraph';
const Content =()=>{
    const addItems = (obj)=>{
        return(<div>
            <Paragraph
                text1={obj.text1}
                text2={obj.text2}
                value={obj.value}
                risk={obj.risk}
                color={obj.color}
            />
        </div>
            
        );
    }
    const addItems2 = (obj)=>{
        return(<div>
            <Paragraph
                text1={obj.text1}
                text2={obj.text2}
                value={"$"+obj.value+".00"}
                risk={ obj.risk}
                color={obj.color}
            />
        </div>
            
        );
    }
    const addItems3 = (obj)=>{
        return(<div>
            <Paragraph
                text1={obj.text1}
                text2={obj.text2}
                risk={obj.risk}
                value={null}
                color={obj.color}
            />
        </div>
            
        );
    }
    
    
    const {title,content} = file;
    return(<Fragment>
        
        <Col sm={4} lg={5} >
        <span style={{marginLeft:"10px"}}><strong>{title}</strong></span>
            <Card style={{height:"220px"}}>
               <Container>
               {content.map(addItems)}
               </Container> 
            </Card>
           
           
            <span style={{marginLeft:"10px"}}><strong>Highest Business Impact</strong></span>
            <Card style={{height:"220px"}}>
               <Container>
               {content.map(addItems2)}
               </Container> 
            </Card>
        </Col>


        <Col sm={4} lg={5} >
        <span style={{marginLeft:"10px"}}><strong>Assigned To Me</strong></span>
            <Card style={{height:"220px"}}>
               <Container>
               {content.map(addItems3)}
               </Container> 
            </Card>
        </Col>
        
        </Fragment>
    )
}
export default Content;