import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state={
            username:" ",
        }
    }
    
    onChangeHandler=(event)=>{
        var myName= event.target.name;
        var newValue= event.target.value;
        this.setState({[myName]:newValue});
    }
    onSubmitHandler=()=>{
        alert(this.state.username);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>First From</p>
                    <p>{this.state.username}</p>
                    <input name="username" type="text" onChange={this.onChangeHandler} placeholder="Your Name" id=""/> <br></br>
                    <input type="submit" value="Submin"/>
                </form>
            </div>
        );
    }
}

export default Form;