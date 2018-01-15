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

  async deleteFood(name) {
    try {
      await this.props.foodApi.deleteFood(name)
      const newFoods = this.state.foods.filter(food => food.name !== name)
      this.setState({foods: newFoods})
    } catch(err){
      console.log(err)
    }
  }
  
  render() {
    const foodLi = (food, i) => {
      return (
        <li key={i}>
          {food.name} {JSON.stringify(food.isVegan)} {<button data-test={`${food.name}-delete`} onClick={() => this.deleteFood(food.name)}>X</button>}
        </li>
      )
    }

    return (      
      <div data-test='food-list'>
        <ol>
          {
            this.state.foods.map(foodLi)
          }
        </ol>
      </div>
    );
  }
}

export default List;
