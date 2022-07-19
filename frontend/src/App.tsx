import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Upload from "./pages/Upload"


function App() {
  console.log(window.location.pathname);
  return (
    <div className="App">
      { (window.location.pathname === "/Login" || window.location.pathname === "/login" || window.location.pathname === "/Register" || window.location.pathname === "/register") ? null : <NaviBar /> }
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
