import React, { Component } from "react";

class StateProp extends Component {

    constructor(){
        super()
        this.state={
            name:"Alax",
            age:28,
            address:"Dhanmondi",
        }
    }

    render() {
        return (
            <div> 
                <h1>Name { this.state.name }</h1>
                <p>Age { this.state.age}</p>
            </div>
        );
    }
}
export default StateProp;