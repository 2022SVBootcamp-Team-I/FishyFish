import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import Example from "./pages/Example";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  return (
    <div className="App">
    {/*<NaviBar />*/}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
