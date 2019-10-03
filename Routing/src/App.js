import React from 'react';
import './App.css';
import './My.scss';
import style from './MyCss.module.css';
import MyTable from './pages/MyTable';




function App() {
  return (
    <div className="App">
      <MyTable />

      {/* <h1 className={ style.textStyle}>home</h1>
      <h1 className="textStyle">home</h1> */}

    </div>
  );
}

export default App;
