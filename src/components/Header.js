import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = ({isOpen,setIsOpen}) => {
    return (
        <div className='header'>
            <div className="header__logo">
                <Link to='/' >
                    <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="logo" className="header__logoImg" /> 
                </Link>
            </div>
            <div className="header__links">
                <Link to='/' >Model S</Link>
                <Link to='/about' >Model 3</Link>
                <Link to='/about' >Model X</Link>
                <Link to='/about' >Model Y</Link>
                <Link to='/about' >Solar Roof</Link>
                <Link to='/about' >Solar Panels</Link>
            </div>
            <div className="header__right">
                <Link to="/" className={isOpen && 'header__link__hidden'}>Shop</Link>
                <Link to="/login" className={isOpen && 'header__link__hidden'}>Tesla Account</Link>
                <div className="header__menu" onClick={()=>setIsOpen(!isOpen)}>
                    {
                        isOpen ? <CloseIcon /> : <MenuIcon />
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;