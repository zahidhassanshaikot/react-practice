import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";

class Page2 extends Component {
    constructor(){
        super();
        this.state={
            data:"Shaikot"
        }
    }
    render() {
        var param="/page3/"+this.state.data;
        if(sessionStorage.getItem("username")==null) {
            return <Redirect to="/login"/>
        }else{
        return (
            <div>
                <h1>Page 2</h1>
                <button><Link to={param}>Pass My Name</Link></button>
            </div>
        );
    }
    }
}

export default Page2;