import React from 'react';
import { shallow } from 'enzyme';

import { NavQuestion } from 'shared/components';

const props = { onPress: jest.fn(), title: 'Title' };

describe('NavQuestion component', () => {
    it('should render fine', () => {
        const wrapper = shallow(<NavQuestion {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
