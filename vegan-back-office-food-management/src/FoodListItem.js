import React from 'react';

export default ({food, deleteFood}) => {
    return (
        <li>
        {food.name} {JSON.stringify(food.isVegan)} {<button data-test={`${food.name}-delete`} onClick={() => deleteFood(food.name)}>X</button>}
        </li>
    )
}
