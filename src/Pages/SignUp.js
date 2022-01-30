import React from 'react';
import { Link } from 'react-router-dom';
import AccountHeader from '../components/AccountHeader';
import ButtonSecondary from '../components/ButtonSecondary';
import SignupForm from '../components/SignupForm';
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className="signUp">
            <AccountHeader />
            <div className="signUp__info">
                 <h1>Sign Un</h1>
                <SignupForm />
                <div className="signUp__divider">
                    <hr /> <span>OR</span><hr />
                </div>
                <Link to="/login" className="signUp__signup">
                    <ButtonSecondary name='SIGN IN' type="button" />
                </Link>
            </div> 
        </div>
    );
};

export default SignUp;