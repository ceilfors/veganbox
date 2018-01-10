import AddFood from './AddFood';
import React, { Component } from 'react';
import rp from 'request-promise-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      food: '',
      isVegan: false
    }
    this.submitFn = this.submitFn.bind(this)
  }

  submitFn() {
    const options = {
      method: 'POST',
      uri: 'http://localhost:8080/food',
      body: {
          food: this.state.food,
          isVegan: this.state.isVegan
      },
      json: true
    };

    return rp(options)
      .then(result => {
        console.log('Result: ', result)
      })
  };

  render() {
    return (
      <AddFood submitFn={this.submitFn}/>
    );
  }
}

export default App;
