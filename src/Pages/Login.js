import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSecondary from '../components/ButtonSecondary';
import Form from '../components/Form';
import './Login.css';
const Login = () => {
    return (
        <div className="login">
            <div className="login__header">
                <div className="login__logo">
                    <Link to="/"> 
                        <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="logo" className="header__logoImg"/>
                    </Link>
                </div>
                <div className="login__language">
                    <LanguageOutlinedIcon /> <span>en-US</span>
                </div>
            </div> 
            <div className="login__info">
                 <h1>Sign In</h1>
                <Form />
                <div className="login__divider">
                    <hr /> <span>OR</span><hr />
                </div>
                <Link to="/signup" className="login__signup">
                    <ButtonSecondary name='CREATE ACCOUNT' type="button" />
                </Link>
            </div> 
        </div>
    );
};

export default Login;