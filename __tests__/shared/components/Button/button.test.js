import React from 'react';
import { shallow } from 'enzyme';

import { Button } from 'shared/components';

const props = { title: 'Title', onPress: jest.fn() };

describe('Button component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Button {...props} />);
    });

    it('should render fine', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call function from props', () => {
        wrapper.find('TouchableWithoutFeedback').simulate('pressOut');
        expect(props.onPress).toHaveBeenCalled();
    });
});
