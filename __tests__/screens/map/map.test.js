import React from 'react';
import { shallow } from 'enzyme';

import { MapScreen } from 'screens';

describe('Map screen', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MapScreen />);
    });

    it('should render fine', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
