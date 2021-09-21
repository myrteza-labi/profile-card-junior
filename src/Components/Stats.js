import React from 'react'; 
import './Stats.css'; 

function Stats(props){
    return(
        <div className="stat">
            <h3 className="statNumber">{props.statNumber}</h3>
            <h3 className="statName">{props.statName}</h3>
        </div>
    )
}
export default Stats; 