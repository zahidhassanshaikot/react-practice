import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Page1 extends Component {

    render() {
        if(sessionStorage.getItem("username")==null) {
            return <Redirect to="/login"/>
        }else{
        return (
            <div>
                <h1>Page 1</h1>
            </div>
        );
    }
    }
}

export default Page1;