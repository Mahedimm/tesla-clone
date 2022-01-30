import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import ButtonPrimary from './ButtonPrimary';
import Input from './Input';


const SignupForm = () => {
    const {handleEmailChange,handlePasswordChange,error,handleSignUp,handleName} = useAuth();
    
    const { register, handleSubmit,formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);
        if(!data.Name || !data.Email || !data.Password) {
           return alert('Please fill all the fields');
            
        }
       handleSignUp(data.Email,data.Password,data.Name)
       
       
}
    return (
  
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <Input label="Name" register={register} required type="text" />
            <Input label="Email" register={register} required type="email" />
            <Input label="Password" register={register} required type="password" />
            <ButtonPrimary name="Create Account" type="submit"/>
        </form>
            

    );
};

export default SignupForm;