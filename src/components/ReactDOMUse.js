import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ReactDOMUse extends Component {
    myFun(){
        var container=document.getElementById("myId");
        var element="My name is boltu i am from khagrachori"
        var callback=function () {
            alert("hi i am call back");
        }
        ReactDOM.render(element, container, callback)
    }
    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="myId">I am Shaikot</h1>
            </div>
        );
    }
}

export default ReactDOMUse;