import React from 'react';
import { shallow, mount } from 'enzyme';

import ResultPanel from './ResultPanel'

describe('ResultPanel', () => {

    it('shows green tick if result is true', () => {
        const wrapper = shallow(<ResultPanel result={true} criteria={'some food'} />)
        expect(wrapper.find('#result-ok')).toHaveLength(1)
    })

    it('shows red x if result is false', () => {
        const wrapper = shallow(<ResultPanel result={false} criteria={'some food'} />)
        expect(wrapper.find('#result-bad')).toHaveLength(1)
    })

    it('should not show anything if criteria is empty', () => {
        const wrapper = shallow(<ResultPanel result={false} criteria={''} />)
        expect(wrapper.find('#result-bad')).toHaveLength(0)
        expect(wrapper.find('#result-ok')).toHaveLength(0)
    })
})
