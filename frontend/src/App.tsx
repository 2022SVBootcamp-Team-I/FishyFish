import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import Example from "./pages/Example";


function App() {
  return (
    <div className="App">
    <NaviBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
