import React from 'react';
import {Doughnut,Chart} from 'react-chartjs-2';

const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    const chart = this.chart.chart;
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;
    
    const fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize/2 + "em Verdana";
    ctx.textBaseline = "middle";

    const text = chart.config.data.text,
    textX = Math.round((width - ctx.measureText(text).width) / 2),
    textY = height / 2;
    const text2 = chart.config.data.text2;
    const text3 = chart.config.data.text3;
    const color = chart.config.data.color;
    ctx.fillStyle='black';
    ctx.fillText(text, textX-8, textY-50);
    ctx.font = fontSize*1.5+ "em Verdana";
    ctx.fillStyle = color;
    ctx.fillText(text2, textX, textY);
    ctx.fillStyle='black';
    ctx.font = fontSize/2+ "em Verdana";
    ctx.fillText(text3,textX-35,textY+50);
    ctx.save();
}
});

export default function DataQualityIndex(props){
    const now = props.now;
    const last = props.last;
    const chartData={
        labels: ['High', 'Medium','Low'],
        datasets:[
          {
            label:'Business IMpact',
            data:[
              50,25,25
              
            ],
            backgroundColor:[
              'red',
              'orange','yellow'
            ]
          }
        ],
        text:"Currently",
        text2:now,
        text3:"Last Month:"+last,
        color:now>last?'green':'red'
      }
    return(
        <Doughnut
            style={{height:"127px",width:"127px"}}
            data={chartData}
            options={{
            cutoutPercentage:'90',
            legend:false,
            maintainAspectRatio: false,
            
          }}
        />
    );
}