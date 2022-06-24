import React from "react";

import './ChartBars.css';

const ChartBars = props => {
    let barfillheight = '0%';

    if(props.max > 0){
        barfillheight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barfillheight}}> 
                
                </div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    );
};

export default ChartBars;
