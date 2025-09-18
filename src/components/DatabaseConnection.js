import React, { useState } from 'react';
import axios from 'axios';
import "./Database.css";
import Navbar from "./Navbar";
import Header from "./Header";


function DatabaseConnectionForm() {
  const [db_type, setDatabaseType] = useState('');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [database, setDatabaseName] = useState('');
  const [user, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/database', {
        db_type,
        host,
        port,
        database,
        user,
        password,
      });

      // Handle the successful response (e.g., display schema data)
      console.log(response.data);
    } catch (error) {
      // Handle the error (e.g., display an error message)
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
<div className="head-title" htmlFor="database-type">Connect/Change Your Database</div>
      <div className="form-container">
         
        <form onSubmit={handleSubmit}>
          <div className="database-connection-form">
            <div>
              <label htmlFor="database-type">Select Your Database type</label>
              <select
                id="database-type"
                name="database"
                value={db_type}
                onChange={(e) => setDatabaseType(e.target.value)}
              >
                <option value="">Select Database</option>
                <option value="mysql">MySQL</option>
                <option value="sqlite">SQLite</option>
                <option value="postgresql">PostgreSQL</option>
                <option value="mssql">Microsoft SQL Server</option>
              </select>
            </div>
            <div>
              <label htmlFor="host">Host Name</label>
              <input
                type="text"
                id="host"
                placeholder="Enter HostName"
                value={host}
                onChange={(e) => setHost(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="port">Port Number</label>
              <input
                type="text"
                id="port"
                placeholder="Enter Port Number"
                value={port}
                onChange={(e) => setPort(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="database-name">Database Name</label>
              <input
                type="text"
                id="database-name"
                placeholder="Enter DB Name"
                value={database}
                onChange={(e) => setDatabaseName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter Username"
                value={user}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Connect</button>
          </div>
        </form>
      </div>
      <div id="offcanvasDarkNavbar"></div>
      <br/>
      <br/>
    </div>
  );
}

export default DatabaseConnectionForm;