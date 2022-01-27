import React from 'react';
import { useForm } from "react-hook-form";
import ButtonPrimary from './ButtonPrimary';
import './Form.css';
import Input from './Input';

const Form = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <Input label="Email Address" register={register} required type="email" />
            {/* <Input label="Name" register={register} required type='text' /> */}
            <Input label="Password" type="password" register={register} required />
            <ButtonPrimary name='LOGIN' type="submit" />
        </form>
    );
};

export default Form;