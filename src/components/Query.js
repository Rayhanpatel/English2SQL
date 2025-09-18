import React, { useState } from 'react';
import './Query.css'; // Import the CSS file
import { FaPaperPlane } from 'react-icons/fa'; // Import the send icon
import Navbar from './Navbar';
import Header from './Header';



const QueryInput = ({ onChange, value }) => {
  const handleSendClick = () => {
    console.log("Send icon clicked");
  };
  return (
    <div className="input-container">
      <input className="query-input" type="text" value={value} onChange={onChange} placeholder="Enter your query here" />
      <FaPaperPlane className="send-icon" onClick={handleSendClick} />
    </div>
  );
};

const DatabaseInfo = () => {
  return (
    <div className="database-info">
      <label className="label">Database Info</label>
    </div>
  );
};

const QueryResult = ({ data }) => {
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

  const generateSQLQuery = () => {
    // Logic to generate SQL query and set sqlQuery
    const generatedQuery = 'Sample SQL Query'; // Replace this with actual generated SQL query
    setSqlQuery(generatedQuery);

    // Logic to retrieve data from the database and set queryResult
    const fetchedData = ['Result 1', 'Result 2']; // Replace this with actual fetched data
    setQueryResult(fetchedData);
  };

  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='container'>
      <div className="left-box">
  <h1 className="query-title">SQL Query Generator</h1>
  {sqlQuery && (
    <div className="sql-query">
      <h3>Generated SQL Query:</h3>
      <p>{sqlQuery}</p>
    </div>
  )}
  <div className="query-input-container">
    <QueryInput value={query} onChange={(e) => setQuery(e.target.value)} />
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
