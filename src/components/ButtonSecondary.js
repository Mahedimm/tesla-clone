import React from 'react';
import "./ButtonSecondary.css";
const ButtonSecondary = ({type,name}) => {
        return (
            <button className='buttonSecondary' type={type}>
                {name}
            </button>
        );
    
};

export default ButtonSecondary;