import React, { Component } from 'react';

class Contact extends Component {
    
    render() {
        const textStyle={
            backgroundColor: "green",
            color: "red",
            margin:"50px"
        }
        return (
            <div>
                <h1 style={textStyle}>Contact</h1>
            </div>
        );
    }
}

export default Contact;