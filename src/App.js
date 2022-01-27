import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { selectUser } from './features/useSlice';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
 
  const user = useSelector(selectUser);
 
  return (
     <Router>
       <div className="app">
       <Routes >
       <Route exact path="/" element={<Home />} />
       <Route exact path="/account" element={<Account />} />
       <Route path="/login" element={ user ?<Navigate to="/account" /> : <Login/> } />      
      </Routes>
        
        
    </div>
     </Router>
    
  );
}

export default App;
