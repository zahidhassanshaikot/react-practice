import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {
constructor(){
    super();
    this.state={
        postData:" ",
        postResult:" "
    }
}

    onChangeHandler=(event)=>{
        var myData=event.target.value;
        this.setState({ postData: myData});
    }

    onClickHandler=()=>{
        axios.post('http://ss.rabbil.com/test.php',this.state.postData)
        .then(response=>{
        this.setState({postResult:response});
        alert(this.state.postResult);
        })
        .catch(error=>{
            alert("Some thing is wrong");
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.onChangeHandler} type="text" name="fname" id=""/>
                <button onClick={this.onClickHandler}>Send</button>
            </div>
        );
    }
}

export default Post;