import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Protfolio from './pages/Protfolio';
import CountryList from './pages/CountryList';
import Post from './pages/Post';


import { Route, Link, BrowserRouter as Router  } from "../node_modules/react-router-dom";
import * as serviceWorker from './serviceWorker';


const myRoute=(
    <Router>
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/protfolio">Protfolio</Link>
                <Link to="/Country-List">CountryList</Link>
                <Link to="/save-to-server">Save</Link>
            </ul>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/protfolio" component={Protfolio}/>
            <Route path="/Country-List" component={CountryList}/>
            <Route path="/save-to-server" component={Post}/>
        </div>
    </Router>
);

ReactDOM.render(myRoute, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
