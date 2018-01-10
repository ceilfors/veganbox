import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure } from 'enzyme';
import App from './App';
import AddFood from './AddFood';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock'

configure({ adapter: new Adapter() });

describe('AddFood', () => {
  let submitFn

  beforeEach(() => {
   submitFn = jest.fn()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });

  it('renders text box for food', () => {
    const wrapper = shallow(<AddFood submitFn={submitFn}/>)
    expect(wrapper.find('FieldGroup#food')).toHaveLength(1);
  })

  it('renders check box for isVegan', () => {
    const wrapper = shallow(<AddFood submitFn={submitFn}/>)
    expect(wrapper.find('Checkbox#isVegan')).toHaveLength(1);
  })

  it('renders submit button', () => {
    const wrapper = mount(<AddFood submitFn={submitFn}/>)
    expect(wrapper.find('Button#submit')).toHaveLength(1);
  })

  it('executes post when submit button is pressed', () => {
    const backend = nock('http://localhost:3001')
                  .post('/food', {
                  food: '',
                  isVegan: false
                  })
                .reply(200, {});

    const wrapper = mount(<AddFood submitFn={submitFn}/>)
    wrapper.find('Button#submit').simulate('click')
    expect(submitFn).toHaveBeenCalled()
  })
})
