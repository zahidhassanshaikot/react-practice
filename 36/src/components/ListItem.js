import React, { Component } from 'react';


class ListItem extends Component {

    myDataChaild = (data) => {
        return <option>{data}</option>
    }
    render() {
        const contry=['Bangladesh','India','Brazil','Pakisthan'];
        const dataItem= contry.map(this.myDataChaild);
        return (
            <div>
                <select>{dataItem}</select>
            </div>
        );
    }
}

export default ListItem;