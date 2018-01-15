import React, { Component } from 'react';
import { connect } from 'react-redux'

import OrderedFoodList from './OrderedFoodList'

class List extends Component {
  constructor(props) {
    super(props)
    
    this.deleteFood = this.deleteFood.bind(this)
  }

  async componentDidMount() {
    const foods = await this.props.foodApi.getFoods()
    this.props.dispatch({type: 'LIST', foods})
  }

  async deleteFood(name) {
    try {
      await this.props.foodApi.deleteFood(name)
      this.props.dispatch({type: 'DELETE', name})
    } catch (err) {
      // console.log(err)
    }
  }

  render() {
    return (
      <OrderedFoodList foods={this.props.foods} deleteFood={this.deleteFood} />
    );
  }
}

const mapStateToProps = (state = {foods: []}) => {
  return {
    foods: state.foods
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
