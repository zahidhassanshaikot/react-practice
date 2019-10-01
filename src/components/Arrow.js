import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AlertMe=(a)=>{
    alert(a);
}

const Arrow = (props)=>{
    return (
        <button class="btn btn-danger" onClick={AlertMe.bind(this,"I am From PP")}>{ props.name }</button>
    );
}

export default Arrow;