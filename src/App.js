import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import BootstrapFunc from './components/BootstrapFunc';
import Arrow from './components/Arrow';

function App() {
  return (
    <div className="App">
        <Hello name="Zahid" age="25"></Hello>

        <Welcome name="class1"></Welcome>
        <BootstrapFunc></BootstrapFunc>
        <Arrow name="hi" />

    </div>
  );
}

export default App;
