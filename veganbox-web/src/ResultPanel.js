import React, { Component } from 'react';

class ResultPanel extends Component {

    render() {
        return (
            <div>
                <div><span id="resultPanel">{ JSON.stringify(this.props.result) }</span></div>
            </div>
        )
    }
}

export default ResultPanel
