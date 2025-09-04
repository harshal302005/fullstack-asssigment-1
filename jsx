import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UsersTable from './components/UsersTable';
import TeachersTable from './components/TeachersTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // For custom styles

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<UsersTable />} />
          <Route path="/teachers" element={<TeachersTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
