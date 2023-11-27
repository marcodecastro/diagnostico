import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './components/Home.js';
import Cadastrar from './components/Register.js';
import Login from './components/Login.js';
import RecoverPassword from './components/RecoverPassword.js';
import ListUsers from './components/ListUsers';
import UserDetails from './components/UserDetails';
import EditUserData from './components/EditUserData';
import DeleteUser from './components/DeleteUser';


const App = () => (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Cadastrar />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RecoverPassword" element={<RecoverPassword />} />
        <Route path="/ListUsers" element={<ListUsers />} />
        <Route path="/UserDetails/:id" element={<UserDetails />} />
        <Route path="/EditUserData/:id" element={<EditUserData />} />
        <Route path="/DeleteUser/:id" element={<DeleteUser />} />
      </Routes>
  </BrowserRouter> 
  
);

export default App;
