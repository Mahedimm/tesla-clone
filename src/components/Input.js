import React from 'react';
import './Input.css';
const Input = ({ label, register, required,type }) => {
    return (
        <>
        <label>{label}</label>
        <input {...register(label, { required })} type={type}/>
      </>
    )};

export default Input;