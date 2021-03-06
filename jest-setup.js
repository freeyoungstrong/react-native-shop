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

jest.mock('@react-native-community/push-notification-ios', () => {
    return {
        addEventListener: jest.fn(),
        requestPermissions: jest.fn(() => Promise.resolve()),
        getInitialNotification: jest.fn(() => Promise.resolve()),
    };
});

jest.mock('appcenter-crashes', () => {
    return {
        setListener: jest.fn(),
        onBeforeSending: jest.fn(),
        onSendingSucceeded: jest.fn(),
        onSendingFailed: jest.fn(),
    };
});

jest.mock('react-native-keychain', () => {
    return {
        getGenericPassword: jest.fn(() => Promise.resolve()),
        setGenericPassword: jest.fn(() => Promise.resolve()),
        resetGenericPassword: jest.fn(() => Promise.resolve()),
    };
});
