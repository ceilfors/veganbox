import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      foods: []
    }
  }

  async componentDidMount() {
    const foods = await this.props.foodApi.getFoods()
    this.setState({foods})
  }
  
  render() {
    return (
      <div data-test='food-list'>
        {JSON.stringify(this.state.foods)}
      </div>
    );
  }
}

export default List;
