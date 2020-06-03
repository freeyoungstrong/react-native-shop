import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from 'shared/components';

const props = { visible: false, onClose: jest.fn(), title: 'Title', description: 'Description' };

describe('ModalView component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Modal {...props} />);
    });

    it('should render fine', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should close Modal', () => {
        wrapper.find('Button').simulate('press');
        expect(props.onClose).toHaveBeenCalled();
    });
});
