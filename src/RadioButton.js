import React from 'react';

const RadioButton = props =>{

    return(
        <React.Fragment>
            <input type='radio' id={props.value} value={props.value} name={props.id} />
            <label htmlFor={props.value}>{props.value}</label>
        </React.Fragment>
    )
}

export default RadioButton;