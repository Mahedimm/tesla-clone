import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { login, logout, selectUser } from './features/useSlice';
import { auth } from './Firebase/firebase.config';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MyPage from './Pages/MyPage';
import SignUp from './Pages/SignUp';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth,(userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])
 
  return (
     <Router>
       <div className="app">
       <Routes >
          <Route  path="/" element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />} />
        
           <Route path="/login" element={user ?<Navigate replace to='/myPage' /> :<Login />} />

           <Route path="/signUp" element={<SignUp />} />
           <Route path="/myPage" element={!user? <Navigate replace to='/login'/> : <MyPage  isOpen={isOpen} setIsOpen={setIsOpen} />} />
      </Routes>      
    </div>
     </Router>
    
  );
}

export default App;
