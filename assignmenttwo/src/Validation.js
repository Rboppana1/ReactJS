import React from 'react';

const Validation = (props) => {
    let validationMessage = 'Text is too short!'
    if (props.inputLength >5) {
        validationMessage = 'Text is long as it has more than 5 characters!'}
    return (
        <div>
        <p>{validationMessage}</p>
        </div>
        );
};

export default Validation;
