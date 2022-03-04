import React from 'react';
const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            <h4>{props.label}</h4>
        </button>
    )
}
export default Button;