import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import AuthProvider from './Context/AuthProvide';
import { selectUser } from './features/useSlice';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MyPage from './Pages/MyPage';
import SignUp from './Pages/SignUp';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  console.log(user);
 
  return (
    <AuthProvider>
     <Router>
       <div className="app">
       <Routes >
          <Route  path="/" element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />} />
          <Route  path="/myPage" element={<MyPage isOpen={isOpen} setIsOpen={setIsOpen} />} />
          <Route path="/login" element={<Login/>} />
           <Route path="/login" element={user ?<Navigate replace to='/account' /> :<Login />} />
           <Route path="/signUp" element={<SignUp />} />
      </Routes>
        
    </div>
     </Router>
     </AuthProvider>
  );
}

export default App;
