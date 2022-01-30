import React from 'react';
import { Link } from 'react-router-dom';
import AccountHeader from '../components/AccountHeader';
import ButtonSecondary from '../components/ButtonSecondary';
import LoginForm from '../components/LoginForm';
import './Login.css';

const Login = () => {
    return (
        <div className="login">
            <AccountHeader />
            <div className="login__info">
                 <h1>Sign In</h1>
                <LoginForm />
                <div className="login__divider">
                    <hr /> <span>OR</span><hr />
                </div>
                <Link to="/signUp" className="login__signup">
                    <ButtonSecondary name='CREATE ACCOUNT' type="button" />
                </Link>
            </div> 
        </div>
    );
};

export default Login;