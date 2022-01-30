import React from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import './Car.css';
const Car = ({img,model,testDrive}) => {
    return (
        <div className="car">
        <div className="car__img">
            <img src={img} alt={model}/>
        </div>
            <h2 className="car__model">{model}</h2>
            <div className="car__action">
               <ButtonPrimary name="order"/>
               {testDrive === true && <ButtonSecondary name="test drive"/>}
            </div>
            <p className="car__info">
                <span>Request a Call </span>to speak with a product specialist, value
        your trade-in or apply for leasing
            </p>
        </div>
    );
};

export default Car;