import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import Registration from './components/Registration';
import DatabaseConnectionForm from './components/DatabaseConnection';
import SQLQueryGenerator from './components/Query'; // Assuming your SQLQueryGenerator component file path
// import DiagramPage from './components/DiagramPage';

function App() {
  return (
    <Router>
      <div className='bigContainer'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/database" element={<DatabaseConnectionForm />} />
          <Route path="/query" element={<SQLQueryGenerator />} /> 
          {/* <Route path="/diagram" element={<DiagramPage />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
