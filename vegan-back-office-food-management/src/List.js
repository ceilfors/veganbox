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
        <ol>
          {
            this.state.foods.map((food, i) => <li key={i}>{food.name} {JSON.stringify(food.isVegan)}</li>)
          }
        </ol>
      </div>
    );
  }
}

export default List;
