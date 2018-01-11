import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap'

class ResultPanel extends Component {

    render() {
        if (this.props.criteria.length === 0) {
            return <div />
        }

        const ok = <div id="result-ok">
            <Glyphicon glyph="ok" />
            <span id="resultPanel" style={{marginLeft: '8px'}}>{`Good choice! Finish that ${this.props.criteria}`}</span>
        </div>

        const bad = <div id="result-bad">
            <Glyphicon glyph="remove" />
            <span id="resultPanel" style={{marginLeft: '8px'}}>{`${this.props.criteria} is a no no, find other food`}</span>
        </div>

        return this.props.result ? ok : bad
    }
}

export default ResultPanel
