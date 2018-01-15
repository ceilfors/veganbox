import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure } from 'enzyme';
import List from './List';
import Adapter from 'enzyme-adapter-react-16';
import { createWaitForElement } from 'enzyme-wait';

import OrderedFoodList from './OrderedFoodList'

configure({ adapter: new Adapter() });

describe('List', () => {

  let foodApi

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
    
    foodApi = {
      getFoods: () => Promise.resolve(data),
      deleteFood: jest.fn()
    }
  })

  describe('e2e', () => {
    let wrapper, waitForFoodList

    beforeEach(() => {
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
  
    describe('when frazzles delete button is clicked', () => {
      it('should delete frazzles from UI', async () => {
        foodApi.deleteFood.mockImplementation(_ => Promise.resolve())
        await waitForFoodList(wrapper)
        wrapper.update()
        const foodList = wrapper.find('[data-test="food-list"]')
        const frazzlesDel = foodList.find('[data-test="frazzles-delete"]')
        await frazzlesDel.simulate('click')
        
        expect(foodList.html().includes('frazzles')).toBe(false)
      })
  
      it('should not delete frazzles from UI if the rest api returns error', async () => {
        foodApi.deleteFood.mockImplementation(_ => {throw new Error('boo')})
        await waitForFoodList(wrapper)
        wrapper.update()
        const foodList = wrapper.find('[data-test="food-list"]')
        const frazzlesDel = foodList.find('[data-test="frazzles-delete"]')
        await frazzlesDel.simulate('click')
        
        expect(foodList.html().includes('frazzles')).toBe(true)
      })
  
      it('should call rest API with delete', async () => {
        await waitForFoodList(wrapper)
        wrapper.update()
        const foodList = wrapper.find('[data-test="food-list"]')
        const frazzlesDel = foodList.find('[data-test="frazzles-delete"]')
        frazzlesDel.simulate('click')
        expect(foodApi.deleteFood).toHaveBeenCalledTimes(1)
        expect(foodApi.deleteFood).toBeCalledWith('frazzles')
      })
    })
  })

  it('should render OrderedFoodList', () => {
    const wrapper = shallow(<List foodApi={foodApi}/>)
    expect(wrapper.find(OrderedFoodList).exists()).toBe(true)
  })  
})
