import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
        <Hello></Hello>
        <Welcome></Welcome>
    </div>
  );
}

export default App;
