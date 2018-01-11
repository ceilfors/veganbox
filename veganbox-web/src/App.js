import React, { Component } from 'react';
import './App.css';

import SearchBar from './SearchBar'
import ResultPanel from './ResultPanel'
import rp from 'request-promise-native'
import { Alert, Grid, Col, Row } from 'react-bootstrap'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      result: undefined,
      criteria: '',
      lastSearchedCriteria: ''
    }
    this.search = this.search.bind(this)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
  }

  handleFilterTextChange(criteria) {
    this.setState({criteria})
  }

  search() {
    console.log(`Searching for ${this.state.criteria} from ${this.props.url}/search`)
    const options = {
        uri: `${this.props.url}/search`,
        qs: {
            food: this.state.criteria
        },
        json: true
    }
    return rp(options)
      .then(result => {
        this.setState({result, lastSearchedCriteria: this.state.criteria})
      })
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={12}>
            <header className="App-header">
              <h1 className="App-title">Welcome to VeganBox!</h1>
            </header>
            <br />
          </Col>
        </Row>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <SearchBar searchFn={this.search} criteria={this.state.criteria} onFilterTextChange={this.handleFilterTextChange} />
          </Col>
        </Row>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <ResultPanel result={this.state.result} criteria={this.state.lastSearchedCriteria} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
