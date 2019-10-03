import React, { Component } from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state={
            fname:" ",
            lname:" ",
            email:" ",
            mobile:" ",
            texta:" ",
            city:{
                city1:"Dhaka",
                city2:"Rajshahi",
                city3:"Syllet",
                city4:"Barisal",
                city5:"Rangpur"
            },
            show:" ",
            auto:"Rajshahi"
        }
    }
    onChangeHandler = (event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName]:inputValue, auto:inputValue});

        if (inputName==="fname"){
            var namePattern=/^([a-zA-Z]){2,30}$/;
            if (!namePattern.test(inputValue)){
                this.setState({fname:"First Name is not valid"});
            }
        }
        if (inputName ==="lname"){
            var namePattern = /^([a-zA-Z]){2,30}$/;
            if (!namePattern.test(inputValue)) {
                this.setState({ lname: "Last Name is not valid" });
            }
        }
        if (inputName ==="email"){
            var emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
            if (!emailPattern.test(inputValue)) {
                this.setState({ email: "Email is not valid" });
            }
        }
        if (inputName ==="mobile"){
           
            if (!Number(inputValue)) {
                this.setState({ mobile: "Mobile is not valid" });
            }
        }
     
        
    } 
    
    render() {
        return (
            <div>
                <p>First Name:{this.state.fname}</p>
                <p>Last Name:{this.state.lname}</p>
                <p>Email:{this.state.email}</p>
                <p>Mobile:{this.state.mobile}</p>
                <p>TExt:{this.state.texta}</p>
                <p>City:{this.state.show}</p>
                <form>
                  
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="Your first name" id="" /> <br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Your last name" id="" /> <br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Your email" id="" /> <br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Your Mobile No" id="" /> <br></br>
                    <textarea onChange={this.onChangeHandler} name="texta" placeholder="Your Message"/> <br></br>
                    <select name="show" onChange={this.onChangeHandler} value={this.state.auto}>
                        <option>{ this.state.city.city1}</option>
                        <option>{ this.state.city.city2}</option>
                        <option>{ this.state.city.city3}</option>
                        <option>{ this.state.city.city4}</option>
                        <option>{ this.state.city.city5}</option>
                    </select><br></br>
                    <input onChange={this.onChangeHandler} type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Signup;