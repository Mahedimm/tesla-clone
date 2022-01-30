import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import './myPageHeader.css';
const MyPageHeader = ({isOpen,setIsOpen}) => {
    const logOutApp=()=>{
        // console.log('logout');
    }
    return (
        <div className='myPage__header'>
        <div className="myPageHeader__logo">
            <Link to='/' >
                <img src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" alt="logo" className="myPageHeader__logoImg" /> 
            </Link>
        </div>
        <div className="myPageHeader__links">
            <Link to='/' >Model S</Link>
            <Link to='/about' >Model 3</Link>
            <Link to='/about' >Model X</Link>
            <Link to='/about' >Model Y</Link>
            <Link to='/about' >Solar Roof</Link>
            
        </div>
        <div className="myPageHeader__right">
            <Link to="/" className={isOpen && 'myPageHeader__link__hidden'}>Shop</Link>
            {/* <Link to="/login" className={isOpen && 'myPageHeader__link__hidden'}>Tesla Account</Link> */}
            <button  className={isOpen && 'myPageHeader__link__hidden'} onClick={logOutApp}> Log Out</button>
            <div className="myPageHeader__menu" onClick={()=>setIsOpen(!isOpen)}>
                {
                    isOpen ? <CloseIcon /> : <MenuIcon />
                }
            </div>
        </div>
    </div>
    );
};

export default MyPageHeader;