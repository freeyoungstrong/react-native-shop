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

    xit('should call function from props', () => {
        wrapper.find('RNButton').simulate('press');
        expect(props.onPress).toHaveBeenCalled();
    });
});
