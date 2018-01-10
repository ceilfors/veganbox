import React, { Component } from 'react';
import { FormGroup, Col, Row, Grid } from 'react-bootstrap'

import SearchTextBox from './SearchTextBox'
import SearchButton from './SearchButton'

class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.onFilterTextChange(event.target.value)
    }

    render() {
        return (
            <FormGroup>
                    <Row>
                        <Col md={12}>
                            <SearchTextBox value={this.props.criteria} handleChange={this.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div style={{'marginTop': '2px'}}>
                                <SearchButton searchFn={this.props.searchFn} />
                            </div>
                        </Col>
                    </Row>
            </FormGroup>
        )
    }
}

export default SearchBar
