import React, { Component } from 'react';

class JsonList extends Component {
    render() {
        const myList = [
            {
                city:"Dhaka",
                zip:"1000"
            },
            {
                city:"Rajshahi",
                zip:"2000"
            },
            {
                city:"Rangpur",
                zip:"3000"
            },
        ];
        const dataItemCity=myList.map((dataCity)=>{
            return <option>{dataCity.city}</option>
        })
        const dataItemZip=myList.map((dataZip)=>{
            return <option>{dataZip.zip}</option>
        })
        return (
            <div>
                <select>{dataItemCity}</select>
                <select>{dataItemZip}</select>
            </div>
        );
    }
}

export default JsonList;