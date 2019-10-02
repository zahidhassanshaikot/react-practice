import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AnotherReactDOMUse extends Component {
    changeImg(){
        var imgId= document.getElementById('imgId');   
        ReactDOM.findDOMNode(imgId).src ="https://miro.medium.com/max/8688/0*Qx5PHkuQkQStWZk6"
    }
    render() {
        return (
            <div>
                <button onClick={this.changeImg}>Change Image</button> <br></br>
                <img id="imgId" src="https://miro.medium.com/max/2418/1*HCUtuON8qsHAyWusOsR64A.png" alt=""/>
            </div>
        );
    }
}

export default AnotherReactDOMUse;