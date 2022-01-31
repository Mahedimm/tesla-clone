import { signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/useSlice';
import { auth } from '../Firebase/firebase.config';
import ButtonPrimary from './ButtonPrimary';
import './Form.css';
import Input from './Input';

const LoginForm = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = data => {
       
      console.log(data);
   
    
       signInWithEmailAndPassword(auth,data.Email,data.Password).then((userAuth) => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
              })
            )
            navigate('/myPage');
          })
          .catch((error) => alert(error.message))
    }
    return (
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <Input label="Email" register={register} required type="email" />
            {/* <Input label="Name" register={register} required type='text' /> */}
            <Input label="Password" type="password" register={register} required />
            <ButtonPrimary name='LOGIN' type="submit" />
        </form>
    );
};

export default LoginForm;