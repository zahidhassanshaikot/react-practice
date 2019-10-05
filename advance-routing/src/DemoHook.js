import React from 'react';
import {useState} from 'react';

const DemoHook = () => {
    const [name,setName]=useState({
            countryName:"bangladesh"
    })
    return (
        <div>
            <h1>{name.countryName}</h1>
            <button onClick={()=>setName({countryName:"India"})}>Change</button>
        </div>
    );
};

export default DemoHook;