import React from 'react';
import { shallow } from 'enzyme';

import { ModalView } from 'shared/components';

const props = { visible: false, onClose: jest.fn(), title: 'Title', description: 'Description' };

describe('ModalView component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ModalView {...props} />);
    });

    it('should render fine', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should close ModalView', () => {
        wrapper.find('TouchableOpacity').simulate('press');
        expect(props.onClose).toHaveBeenCalled();
    });
});
