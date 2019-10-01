import React from 'react';


function Hello(props) {
    function doThis(a) {
        alert(a);
        
    }
    return (
        <div>
            <button onClick={doThis.bind(this,"hello I am from param")}>Click Me</button>
        <h1>Name {props.name} Age:{props.age} </h1>
        </div>
    );
}

export default Hello;
