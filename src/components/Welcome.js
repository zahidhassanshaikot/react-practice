import React, { Component } from "react";

class Welcome extends Component{
    doThisFromClass(a) {
    alert(a);    
    }
    render(){
        return (
            <div>
                <button onClick={this.doThisFromClass.bind(this, "hello I am from param")}>Click Me from class</button>
                <h1>How Are you {this.props.name}? </h1>
            </div>
        );
    }
}

export default Welcome;