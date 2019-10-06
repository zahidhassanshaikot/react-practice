import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ProductItem from "./productItem";


const propTypes={
    name:PropTypes.string.isRequired,
    onClicked:PropTypes.func,
    title:PropTypes.string.isRequired,
};
const defaultProps={
    name:"Default Name"
}
class MyComponent extends Component {

    render() {
        const {title, name, onClick}=this.props;
        return (
            <div>
                <h1>Title: {title}</h1>
                <h1>Name: {name}</h1>
                <div onClick={onClick}></div>
            </div>
        );
    }
}
MyComponent.propTypes=propTypes;
MyComponent.defaultProps=defaultProps;
export default MyComponent;