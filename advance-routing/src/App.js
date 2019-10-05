import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mynavigation from "./components/mynavigation";
import Myroute from "./components/myroute";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mynavigation/>
        <Myroute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
