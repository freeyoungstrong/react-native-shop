import React from 'react';
import { Alert } from 'react-native';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import { LoginScreen } from 'screens';
import { loc } from 'shared/assets';
import { routes } from 'shared/constants';

const mockNavigation = {
    navigate: jest.fn(),
};

jest.spyOn(redux, 'useDispatch').mockImplementation(jest.fn());
jest.spyOn(Alert, 'alert').mockImplementation(jest.fn());

describe('Login screen', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LoginScreen navigation={mockNavigation} />);
    });

    it('should render fine', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should show alert message', () => {
        wrapper.find({ title: loc('login.navQuestion1.title') }).simulate('press');
        expect(Alert.alert).toHaveBeenCalledWith(loc('login.navQuestion1.move'));
    });

    it('should navigate to registration screen', () => {
        wrapper.find({ title: loc('login.navQuestion2.title') }).simulate('press');
        expect(mockNavigation.navigate).toHaveBeenCalledWith(routes.REGISTRATION);
    });
});
