import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <h1>Your Personalized Contact Book</h1>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}