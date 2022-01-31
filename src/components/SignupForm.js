import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/useSlice';
import { auth } from '../Firebase/firebase.config';
import ButtonPrimary from './ButtonPrimary';
import Input from './Input';

const SignupForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit,formState: { errors } } = useForm();


    const onSubmit = data => {
        console.log(data);
        if(!data.Name || !data.Email || !data.Password) {
           return alert('Please fill all the fields');
            
        }
        createUserWithEmailAndPassword(auth,data.Email, data.Password)
        .then((userAuth) => {
          updateProfile(auth.currentUser,{
              displayName: data.Name,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: userAuth.user.displayName,
                })
              )
              navigate('/myPage');
            })
        })
        .catch((error) => alert(error.message))
       
       
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