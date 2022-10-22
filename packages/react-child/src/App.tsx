import React from 'react';
import './App.css';
import WujieReact from 'wujie-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React子应用</h1>
        <WujieReact name="vue2" url="//localhost:9001" />
      </header>
    </div>
  );
}

export default App;
