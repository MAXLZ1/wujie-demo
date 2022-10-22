import React from 'react';
import logo from './logo.svg';
import './App.css';
import WujieReact from 'wujie-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WujieReact name="vue2" url="//localhost:9001" />
      </header>
    </div>
  );
}

export default App;
