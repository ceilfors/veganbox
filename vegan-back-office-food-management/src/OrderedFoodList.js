import React from 'react';

import FoodListItem from './FoodListItem'

export default (props) => {
    return (
        <div data-test='food-list'>
            <ol>
                {
                    props.foods.map(food => <FoodListItem key={food.name} food={food} deleteFood={props.deleteFood} />)
                }
            </ol>
        </div>
    )
}
