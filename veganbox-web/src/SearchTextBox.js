import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap'

class SearchTextBox extends Component {
    render() {
        return (
            <FormControl
                id='searchTextBox'
                type="text"
                value={this.props.value}
                placeholder="Enter food name"
                onChange={this.props.handleChange}
            />
        )
    }
}

export default SearchTextBox