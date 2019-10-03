import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'


class MyTable extends Component {

    constructor(){
        super();
        this.state={
            tableInfo:[]
        }
    }
    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ tableInfo: response.data });
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const tableData = this.state.tableInfo
        const col = [
            { Header: "Name", accessor: "name" },
            { Header: "Alpha Code", accessor: "alpha3Code" },
            { Header: "Capital", accessor: "capital" },
            { Header: "Region", accessor: "region" },
        ]

        return (
            <div>
                <ReactTable
                    data={tableData}
                columns={col}
                defaultPageSize={12 }
                pageSizeOptions={[10,20,30,40,50]}
                />
            </div>
        );
    }
}

export default MyTable;