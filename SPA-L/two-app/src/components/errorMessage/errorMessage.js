import React from 'react';
import './errorMessage.css';
import img from './errorM.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="errorImg"/>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;