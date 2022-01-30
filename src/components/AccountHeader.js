import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import "./AccountHeader.css";
const AccountHeader = () => {
    return (
        <div className="account__header">
        <div className="account__logo">
            <Link to="/"> 
                <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="logo" className="header__logoImg"/>
            </Link>
        </div>
        <div className="account__language">
            <LanguageOutlinedIcon /> <span>en-US</span>
        </div>
    </div> 
    );
};

export default AccountHeader;