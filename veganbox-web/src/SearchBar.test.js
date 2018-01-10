import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchBar from './SearchBar'
import SearchTextBox from './SearchTextBox'
import SearchButton from './SearchButton'

describe('SearchBar', () => {

  const handleFilterTextChange = () => {}

  it('renders search text box', () => {
    const wrapper = shallow(<SearchBar criteria='hello' onFilterTextChange={handleFilterTextChange} />)
    expect(wrapper.find(SearchTextBox)).toHaveLength(1);
  })

  it('search text box should renders text field', () => {
    const wrapper = mount(<SearchBar criteria='hello' onFilterTextChange={handleFilterTextChange} />)
    expect(wrapper.find('input#searchTextBox')).toHaveLength(1)
  })

  it('renders search button', () => {
    const wrapper = mount(<SearchBar criteria='hello' onFilterTextChange={handleFilterTextChange} />)
    expect(wrapper.find(SearchButton)).toHaveLength(1);
  })

  it('search button should render a button', () => {
    const wrapper = mount(<SearchBar criteria='hello' onFilterTextChange={handleFilterTextChange} />)
    expect(wrapper.find('button#searchButton')).toHaveLength(1)
  })

  it('executes search when search button is pressed', () => {
    const searchFn = jest.fn()
    const wrapper = mount(<SearchBar searchFn={searchFn} />)
    wrapper.find('button#searchButton').simulate('click')
    expect(searchFn).toHaveBeenCalled()
  })
})
