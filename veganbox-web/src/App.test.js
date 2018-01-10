import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

import SearchBar from './SearchBar'

import nock from 'nock'

describe.only('Vegan Box', () => {

  beforeEach(() => {
    var backend = nock('http://localhost:8080')
                .get('/search')
                .query({food: 'hello'})
                .reply(200, 'true');
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const result = ReactDOM.render(<App />, div);
  })

  it('renders without crashing', () => {
    shallow(<App />);
  })

  it('renders search bar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  })

  it('populare searchCriteria props', () => {
    const searchFn = jest.fn()
    const wrapper = mount(<App />)
    wrapper.find('input#searchTextBox').simulate('change', {
      target: { value: 'hello' }
    })
    expect(wrapper.state('criteria')).toEqual('hello')
  })

  it('calls search with search criteria', () => {
    // setup nock
    global.Promise = require.requireActual('promise')
    const searchFn = jest.fn()
    const wrapper = mount(<App url='http://localhost:8080'/>)
    wrapper.find('input#searchTextBox').simulate('change', {
      target: { value: 'hello' }
    })
    wrapper.find('button#searchButton').simulate('click')
    // setTimeout(() => { 
    //   expect(wrapper.state('result')).toEqual('true')
    //   done();
    // }, 10); 
    
    return new Promise(resolve => {
      console.log('here')
      // resolve()
      // expect(wrapper.state('data')).toEqual('true')
      
      setTimeout(function() {
        console.log('test')
        expect(wrapper.state('data')).toEqual('true')
        resolve()
      }, 10);
    });
  })
})
