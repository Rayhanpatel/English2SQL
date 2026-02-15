import React, { useState } from 'react';
import axios from 'axios';
import './Query.css'; // Import the CSS file
import { FaPaperPlane } from 'react-icons/fa'; // Import the send icon
import Navbar from './Navbar';
import Header from './Header';



const QueryInput = ({ onChange, value, onSubmit }) => {
  const handleSendClick = () => {
    console.log("Send icon clicked");
    if (onSubmit) {
      onSubmit();
    }
  };
  return (
    <div className="input-container">
      <input
        className="query-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter your query here (e.g. 'Show me all users')"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSendClick();
          }
        }}
      />
      <FaPaperPlane className="send-icon" onClick={handleSendClick} />
    </div>
  );
};

const DatabaseInfo = () => {
  return (
    <div className="database-info">
      <label className="label">Database Info</label>
      <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '10px' }}>
        Connected to: <strong>MySQL (Mock)</strong><br />
        Host: <strong>localhost:5000</strong>
      </p>
    </div>
  );
};

const QueryResult = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="query-result">
      <table>
        <thead>
          <tr>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          {data.map((result, index) => (
            <tr key={index}>
              <td>{result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SQLQueryGenerator = () => {
  const [query, setQuery] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');
  const [queryResult, setQueryResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateSQLQuery = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setSqlQuery('');
    setQueryResult([]);

    try {
      // Step 1: Generate SQL
      const genResponse = await axios.post('http://localhost:5000/generate_sql', {
        query: query
      });

      const generatedSql = genResponse.data.sql_query;
      setSqlQuery(generatedSql);

      // Step 2: Run Query
      const runResponse = await axios.post('http://localhost:5000/run_query', {
        query: generatedSql
      });

      setQueryResult(runResponse.data.data);

    } catch (err) {
      console.error(err);
      setError("Failed to generate or execute query. Ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className='container'>
        <div className="left-box">
          <h1 className="query-title">SQL Query Generator</h1>

          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

          {sqlQuery && (
            <div className="sql-query">
              <h3>Generated SQL Query:</h3>
              <p>{sqlQuery}</p>
            </div>
          )}

          <div className="query-input-container">
            <QueryInput
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onSubmit={generateSQLQuery}
            />
            {loading && <p>Processing...</p>}
          </div>
        </div>

        <div className="right-box">
          <div className="top-right-box">
            <DatabaseInfo />
          </div>
          <div className="bottom-right-box">
            <QueryResult data={queryResult} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SQLQueryGenerator;
