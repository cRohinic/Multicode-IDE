import React from 'react';
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Editor from './pages/Editor';
import About from './pages/About'; 
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <RouteHandler />
    </BrowserRouter>
  );
};

const RouteHandler = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/signUp" element={isLoggedIn ? <Navigate to="/" replace /> : <SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
      
      {/* Protected Routes */}
      <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
      <Route path="/editior/:id" element={isLoggedIn ? <Editor /> : <Navigate to="/login" replace />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;