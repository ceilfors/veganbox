import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure } from 'enzyme';
import List from './List';
import Adapter from 'enzyme-adapter-react-16';
import { createWaitForElement } from 'enzyme-wait';

configure({ adapter: new Adapter() });

describe('List', () => {
  it('should list foods from food api', async () => {
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

    const waitForSample = createWaitForElement('[data-test="food-list"]');
    const wrapper = mount(<List foodApi={foodApi}/>)
    await waitForSample(wrapper)
    const foodList = wrapper.find('[data-test="food-list"]')
    expect(foodList.html().includes('frazzles')).toBe(true)
    expect(foodList.html().includes('oreos')).toBe(true)
  })

  it('should', () => {
    
  })
})
