import React from 'react';
import { shallow } from 'enzyme';

import { Input } from 'shared/components';

const props = { onChangeText: jest.fn(), text: '', placeholder: '', secure: false };

describe('Input component', () => {
    it('should render fine', () => {
        const wrapper = shallow(<Input {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
