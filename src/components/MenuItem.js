import React from 'react';
import './MenuItem.css';
const MenuItem = ({title}) => {
    return (
        <div className='menu__item'>
            <h4>{title}</h4>
        </div>
    );
};

export default MenuItem;