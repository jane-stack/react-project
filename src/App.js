import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Contacts from './Contacts';
import CreateNew from './CreateNew';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <h1>Your Personalized Contact Book</h1>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route exact path='/createNew' element={<CreateNew />} />
      </Routes>
    </div>
  );
}