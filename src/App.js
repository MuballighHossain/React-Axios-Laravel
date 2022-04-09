import React, { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom' ;
import Employee from './pages/Employee';
import AddEmployee from './pages/AddEmployee';
import EmployeeLandingPage from "./pages/EmployeeLandingPage";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
  
function App() {
  const [employee, setEmployee] = useState(JSON.parse(localStorage.getItem('auth_user')));
  
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element={<Employee/>}/>
        <Route exact path = "/add-employee"  element={employee!=null?  <Navigate to='/EmployeeLandingpage'/> : <AddEmployee/> }/>
        <Route exact path = "/EmployeeLandingPage" element={<EmployeeLandingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
