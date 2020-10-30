import React from 'react';
import './Spinner.css'

const Spinner = (props) => {
    return(
        <div className="ui segment spinner">
        <div className="ui active dimmer">
        <div className="ui text loader">{props.msg}</div>
        </div>
        <p></p>
        </div>
    )
}

Spinner.defaultProps = {
    msg : 'Loading...'
}

export default Spinner;