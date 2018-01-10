import React, { Component } from 'react';

import { Button } from 'react-bootstrap'


class SearchButton extends Component {

    render() {
        return (
            <div>
                <Button bsStyle='primary' id='searchButton' onClick={this.props.searchFn} block>Search</Button>
            </div>
        )
    }
}

export default SearchButton