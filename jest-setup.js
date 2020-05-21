import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import { NativeModules } from 'react-native';

Enzyme.configure({ adapter: new Adapter() });

NativeModules.RNCNetInfo = {
    getCurrentState: jest.fn(() => Promise.resolve()),
    addListener: jest.fn(),
    removeListeners: jest.fn(),
};

jest.mock('react-native-svg', () => ({}));

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('react-native-gesture-handler', () => {
    return {
        Directions: {},
    };
});

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
