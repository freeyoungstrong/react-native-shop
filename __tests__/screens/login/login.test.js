import React from 'react';
import { shallow } from 'enzyme';

import { LoginScreen } from 'screens';

const mockNavigation = {
    navigate: jest.fn(),
};

describe('Login screen', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LoginScreen navigation={mockNavigation} />);
    });

    it('should render fine', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
