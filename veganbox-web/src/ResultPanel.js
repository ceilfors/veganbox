import React, { Component } from 'react';

import { Glyphicon } from 'react-bootstrap'

export default ({criteria, result}) => {
    if (criteria.length === 0) {
        return <div />
    }

    const ok = <div id="result-ok">
        <Glyphicon glyph="ok" />
        <span id="resultPanel" style={{marginLeft: '8px'}}>{`Good choice! Finish that ${criteria}`}</span>
    </div>

    const bad = <div id="result-bad">
        <Glyphicon glyph="remove" />
        <span id="resultPanel" style={{marginLeft: '8px'}}>{`${criteria} is a no no, find other food`}</span>
    </div>

    return result ? ok : bad
}
