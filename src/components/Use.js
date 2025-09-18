import React from 'react';
import './Use.css';

const CodeSnippet = () => {
  return (
    
    <div className="code-snippet">
      <h2>Bring Your Own Database</h2>
      <p> And Get Entity-Relationship Diagram</p>
      <pre>
  <video controls>
    <source src="path/to/your/video.mp4" type="video/mp4"></source>
    Your browser does not support the video tag.
  </video>
</pre>
    </div>
  );
};

const DatabaseTables = () => {
  return (
    <div className="database-tables">
      <h2>Translate Your English Queires into SQL Queries</h2>
      <pre>
  <video controls>
    <source src="path/to/your/video.mp4" type="video/mp4"></source>
    Your browser does not support the video tag.
  </video>
</pre>
    </div>
  );
};

export default function App() {
  return (
    <div className="containers">
      <CodeSnippet />
      <DatabaseTables />
    </div>
  );
}