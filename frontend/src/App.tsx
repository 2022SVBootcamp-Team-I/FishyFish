import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Upload from "./pages/Upload"
import MyDropzone from "./pages/Test/MyDropzone"


function App() {
  return (
    <div className="App">
      { (window.location.pathname === "/" || window.location.pathname === "/Register" || window.location.pathname === "/register") ? null : <NaviBar /> }
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/fishlist" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mydropzone" element={<MyDropzone />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
