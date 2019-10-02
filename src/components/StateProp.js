import React, { Component } from "react";

class StateProp extends Component {

    constructor(){
        super()
        this.state={
            name:"Alax",
            age: ["28","25","26","27"],
            address:"Dhanmondi",
            weight:{
                class7:"40",
                class10:"50",
                class11:"55"
            }
        }
    }

    render() {
        return (
            <div> 
                <h1>Name { this.state.name }</h1>
                <p>Age { this.state.age[2]}</p>
                <p>weight {this.state.weight.class10}</p>
            </div>
        );
    }
}
export default StateProp;