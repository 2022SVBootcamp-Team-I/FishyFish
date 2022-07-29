import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Upload from "./pages/Upload"
import MyDropzone from "./pages/Test/MyDropzone"
import NotFound from './components/NotFound/NotFound';
import { isLogin } from './function/isLogin';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={isLogin() ? <Navigate to="/upload" /> : <Login />} />
            <Route path="/upload" element={isLogin() ? <Upload /> : <Navigate to="/" />} />
            <Route path="/fishlist" element={isLogin() ? <Home /> : <Navigate to="/" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mydropzone" element={<Upload/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
