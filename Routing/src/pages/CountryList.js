import React, { Component } from 'react';
import axios from 'axios';

class CountryList extends Component {
    constructor(){
        super();
        this.state={
            myData:[]
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({myData:response.data});
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        const myList=this.state.myData
        const countryName= myList.map((myyList)=>{
            return <li>{myyList.name}</li>
        })
        return (
            <div>
                <ul>{countryName}</ul>
            </div>
        );
    }
}

export default CountryList;