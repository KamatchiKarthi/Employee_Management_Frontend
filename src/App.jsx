import React from 'react';
import Navbar from './Components/Asider';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router';
import EmployeeForm from './Components/EmployeeForm';
import Employee from './Components/Employee';
import EmployeeDetails from './Components/EmployeeDetails';

export default function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Employee />} />
          <Route path="form" element={<EmployeeForm />} />
          <Route path="edit/:id" element={<EmployeeForm />} />
          <Route path="employee/:id" element={<EmployeeDetails/>}/>
        </Route>
      </Routes>
    </>
  );
}
