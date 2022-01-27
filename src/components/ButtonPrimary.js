import React from 'react';
import './ButtonPrimary.css';

const ButtonPrimary = ({name,type}) => {
    return (
        <button className="buttonPrimary" type={type}>
            {name}
        </button>
    );
};

export default ButtonPrimary;