import React from 'react';
import { shallow } from 'enzyme';

import { Divider } from 'shared/components';

describe('Divider component', () => {
    it('should render fine', () => {
        const wrapper = shallow(<Divider />);
        expect(wrapper).toMatchSnapshot();
    });
});
