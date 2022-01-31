import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Car from '../components/Car';
import Menu from '../components/Menu';
import MyPageHeader from '../components/MyPageHeader';
import { selectUser } from '../features/useSlice';
import './MyPage.css';
const MyPage = ({isOpen,setIsOpen}) => {
    const user = useSelector(selectUser);
    const cars = [{model:"model s",img:'https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815',id:1,testDrive:true},{model:"model x",img:'https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815',id:2,testDrive:false},{model:"model name",img:'https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815',id:3,testDrive:true},{model:"model name",img:'https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815',id:4,testDrive:false},];
    return (
        <div className="myPage">
     
     <div className="">
           <MyPageHeader isOpen={isOpen} setIsOpen={setIsOpen} />
           {isOpen && <Menu  />}
           </div>
            <div className="myPage__content">
                <div className='myPage__person'>
                    <h4>{user?.displayName + "'S"}</h4>
                </div>
                <div className="myPage__infoRight">
                    <Link to="/">Home</Link>
                    <Link to='/'>Account</Link>
                    <Link to="/">History</Link>
                    <button>Log Out</button>
                </div>
            </div>
            <div className="myPage__car">
            {
                cars.map(item => <Car key={item.id} model={item.model} img={item.img} testDrive={item.testDrive}/>)
            }
                
            </div>
        </div>
    );
};

export default MyPage;