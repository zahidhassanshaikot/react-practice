import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Page3 extends Component {
    constructor({match}){
        super();
        this.state={
            Myname:match.params.username
        }

    }
    render() {
        if(sessionStorage.getItem("username")==null) {
            return <Redirect to="/login"/>
        }else{
        return (
            <div>
                <h1>Page 3</h1>
                <h1>{this.state.Myname}</h1>
            </div>
        );
    }
    }
}

export default Page3;