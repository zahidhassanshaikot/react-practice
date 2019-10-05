import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Mynavigation from "./components/mynavigation";
import Myroute from "./components/myroute";
import {BrowserRouter} from "react-router-dom";
import DemoHook from "./DemoHook";
import Son from "./components/Son";
import ReactFragm from "./components/ReactFragm";
import {DadaProvidar} from "./components/Mycontex"


function App() {
  return (
    <div className="App">

<ReactFragm />

        <DadaProvidar value="Hi puti">
        <Son />
        </DadaProvidar>
        {/*<Son name="Puti name is Shaikot" />*/}
        <DemoHook/>
      <BrowserRouter>
        <Mynavigation/>
        <Myroute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
