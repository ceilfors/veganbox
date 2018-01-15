import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure } from 'enzyme';
import List from './List';
import Adapter from 'enzyme-adapter-react-16';
import { createWaitForElement } from 'enzyme-wait';

configure({ adapter: new Adapter() });

describe('List', () => {
  let wrapper, waitForFoodList

  beforeEach(() => {
    const data = [
      {
        "name": "frazzles",
        "isVegan": false
      },
      {
        "name": "oreos",
        "isVegan": true
      }
    ]
    const foodApi = {
      getFoods: () => Promise.resolve(data)
    }

    waitForFoodList = createWaitForElement('[data-test="food-list"]');
    wrapper = mount(<List foodApi={foodApi}/>)
  })

  it('should list foods from food api', async () => {
    await waitForFoodList(wrapper)
    const foodList = wrapper.find('[data-test="food-list"]')
    expect(foodList.html().includes('frazzles')).toBe(true)
    expect(foodList.html().includes('oreos')).toBe(true)
  })

  it('should contain a delete button', async () => {
    await waitForFoodList(wrapper)
    wrapper.update()
    const foodList = wrapper.find('[data-test="food-list"]')
    const frazzlesDel = foodList.find('[data-test="frazzles-delete"]')
    const oreosDel = foodList.find('[data-test="oreos-delete"]')
    expect(frazzlesDel.exists()).toEqual(true)
    expect(oreosDel.exists()).toEqual(true)
  })
})
