import React from 'react';
import { shallow } from 'enzyme';

import { WelcomeScreen } from 'screens';

const mockNavigation = {
    navigate: jest.fn(),
};

describe('Login screen', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<WelcomeScreen navigation={mockNavigation} />);
    });

    it('should render fine', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
