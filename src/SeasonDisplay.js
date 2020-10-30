import React, {Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import './SeasonDisplay.css';


const seasonConfig = {
    winter : {
        text: 'Burr, it is chilli',
        iconName : 'snowflake'
    },
    summer : {
        text: 'Lets head to the beach',
        iconName : 'sun'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }
    else {
        return lat > 0 ? 'winter' : 'summer'
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text,iconName} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
        <h1>Season Display</h1>
        <i className = {`left-icon massive ${iconName} icon`} />
        <br/>
        <h2 className="season-text">{text}</h2>
        <i className = {`right-icon massive ${iconName} icon`} />
        </div>
    )
}


export default SeasonDisplay;