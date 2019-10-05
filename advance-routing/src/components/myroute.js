import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Home from "./pages/home";
import Notfound from "./pages/notfound";
import Login from "./pages/Login";

class Myroute extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/page1" component={Page1} />
                <Route exact path="/page2" component={Page2} />
                <Route exact path="/page3/:username" component={Page3} />
                <Route component={Notfound} />
                </Switch>
            </div>
        );
    }
}

export default Myroute;