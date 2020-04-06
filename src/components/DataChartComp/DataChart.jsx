import React from 'react';
import { Line } from 'react-chartjs-2';
//import { Container } from 'react-bootstrap';

export default function DataChart(){
    const lineData={
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        datasets: [{ 
            data: [100,120,210,300,111,39,48,29,183,89,143,124,111,289,100],
            label: "Incoming Data",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [5,20,60,100,30,3,2,1,30,12,11,29,20,11,2],
            label: "Data Errors",
            borderColor: "#8e5ea2",
            fill: false
          }
        ]
      }
    return(
        
        
            <div style={{marginLeft:"3%",width:"94%" ,height:"250px"}}>
                <Line
                    data={lineData}
                    options={{
                        maintainAspectRatio:false,
                        title: {
                            display: true,
                            text: 'Errors per Day'
                                }
                             }}
                />
            </div>

            
    );
}