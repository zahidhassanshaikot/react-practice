import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import BootstrapFunc from './components/BootstrapFunc';
import Arrow from './components/Arrow';
import StateProp from './components/StateProp';
import SetState from './components/SetState';
import Condition1 from './components/Condition1';
import ForceUpdate from './components/ForceUpdate';
import ReactDOMUse from './components/ReactDOMUse';
import AnotherReactDOMUse from './components/AnotherReactDOMUse';
import Form from './components/Form';
import Signup from './components/Signup';
import ListItem from './components/ListItem';
import JsonList from './components/JsonList';

function App() {
  return (
    <div className="App">
        {/* <Hello name="Zahid" age="25"></Hello>

        <Welcome name="class1"></Welcome>
        <BootstrapFunc></BootstrapFunc>
        <Arrow name="hi" />
        <StateProp></StateProp>
      <SetState></SetState>
      <Condition1></Condition1>
      <ForceUpdate /> 
      <ReactDOMUse /> 
      <AnotherReactDOMUse />
      <Form></Form> 
      <ListItem />
      <Signup /> */}
      <JsonList/>

    </div>
  );
}

export default App;
